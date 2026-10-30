// Google Apps Script
// Mindbody Registrations
// Script hosted at: https://script.google.com/home
// https://script.google.com/home/projects/1jG3VBh6h_Id3iAQrgybwUE0ETYmCcLvI3pxSzgfnn-3AbY7pEzjlS6KG
// Automation script to create Google Meet event on the calendar for a new student registration.

// --- CLASS DESCRIPTIONS DICTIONARY ---
// Add or adjust specific class descriptions here as you introduce more offerings
var CLASS_DESCRIPTIONS = {
  "Kunga Yoga Flow":
    "Kunga Yoga Flow classes link breath and movement in creative sequences that work all of the major joints and muscles of the body and incorporate extended holds. This class is open to all levels and accessible to any and all body types. Posture (Āsana) alignment, meditation, breathing techniques (Prāṇāyāma), movement, and mindfulness are introduced. Use props to support your poses. Feel comfortable in the foundational postures that are offered.\n\n" +
    "Kunga Yoga is a service-oriented non-lineage style of yoga for all people of all backgrounds, shapes, sizes, and abilities. „Kunga“ is a Rwandan word meaning „to help or to serve“. Please take personal responsibility for your safety and your needs, honoring your practice in the way that suits you.\n\n" +
    "This is an online-only yoga class taught in English.\n\n" +
    "Studio Sun & Sea - Schedule Overview: https://studiosunandsea.com/en/schedule-overview/",

  // Default fallback description used for any class not explicitly mapped above
  "default":
    "Kunga Yoga Flow classes link breath and movement in creative sequences that work all of the major joints and muscles of the body and incorporate extended holds. This class is open to all levels and accessible to any and all body types. Posture (Āsana) alignment, meditation, breathing techniques (Prāṇāyāma), movement, and mindfulness are introduced. Use props to support your poses. Feel comfortable in the foundational postures that are offered.\n\n" +
    "Kunga Yoga is a service-oriented non-lineage style of yoga for all people of all backgrounds, shapes, sizes, and abilities. „Kunga“ is a Rwandan word meaning „to help or to serve“. Please take personal responsibility for your safety and your needs, honoring your practice in the way that suits you.\n\n" +
    "This is an online-only yoga class taught in English.\n\n" +
    "Studio Sun & Sea - Schedule Overview: https://studiosunandsea.com/en/schedule-overview/"
};

// Function to resolve description based on className
function getClassDescription(className) {
  if (!className) return CLASS_DESCRIPTIONS["default"];

  for (var key in CLASS_DESCRIPTIONS) {
    if (key !== "default" && className.toLowerCase().includes(key.toLowerCase())) {
      return CLASS_DESCRIPTIONS[key];
    }
  }
  return CLASS_DESCRIPTIONS["default"];
}


// --- PROCESS MINDBODY REGISTRATION EMAILS ---
function processMindbodyRegistrations() {
  var LABEL_CONST = "01-Bookings/Clients";
  var PROCESSED_LABEL_CONST = "01-Bookings/Clients/Processed";

  // 1. Target your exact custom booking label
  var label = GmailApp.getUserLabelByName(LABEL_CONST);
  if (!label) {
    Logger.log("Label " + LABEL_CONST + " not found. Check the name in Gmail.");
    return;
  }

  // Target the target tracking archive label
  var processedLabel = GmailApp.getUserLabelByName(PROCESSED_LABEL_CONST);
  if (!processedLabel) {
    // Dynamically generate the target label if it doesn't exist yet to prevent system execution errors
    processedLabel = GmailApp.createLabel(PROCESSED_LABEL_CONST);
  }

  var threads = label.getThreads();
  var calendar = CalendarApp.getDefaultCalendar();

// Loop through every email thread marked with the label
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    var latestMessage = messages[messages.length - 1];
    var body = latestMessage.getPlainBody();

    // --- CONVERSATIONAL TEXT PARSING ---

// 1. Extract Class Name (Extracts text between "reservation for " and " with Milos")
    var className = null;
    var classMatch = body.match(/reservation for\s+(.*?)\s+with\s+Milos/i);
    if (classMatch && classMatch[1]) {
      className = classMatch[1].trim();
    }

// 2. Extract Date (Matches "DD/MM/YYYY" format)
    var classDateStr = null;
    var dateMatch = body.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    if (dateMatch) {
      // Rearrange from DD/MM/YYYY to standard YYYY-MM-DD for JavaScript parsing
      classDateStr = dateMatch[3] + "-" + dateMatch[2] + "-" + dateMatch[1];
    }

// 3. Extract Time (Matches digits after "start at ")
    var classTimeStr = null;
    var timeMatch = body.match(/start at\s+(\d{2}:\d{2})/i);
    if (timeMatch && timeMatch[1]) {
      classTimeStr = timeMatch[1].trim();
    }

// --- 4. EXTRACT STUDENT EMAIL (ROBUST HEADER & BODY PARSING) ---
    var studentEmail = null;

    // Helper function to extract email from raw string and filter out business/system emails
    function extractValidStudentEmail(rawString) {
      if (!rawString) return null;
      var matches = rawString.match(/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g);
      if (!matches) return null;

      for (var k = 0; k < matches.length; k++) {
        var email = matches[k].toLowerCase();
        // Ignore internal studio, business, and platform automated addresses
        if (
          !email.includes("studiosunandsea.com") &&
          !email.includes("mindbodyonline.com") &&
          !email.includes("mndbdy.ly")
        ) {
          return matches[k]; // Return exact original casing valid student match
        }
      }
      return null;
    }

    // Step A: Check the 'To' header (Mindbody sends client confirmations to the student's email)
    studentEmail = extractValidStudentEmail(latestMessage.getTo());

    // Step B: If not in 'To', check the 'Reply-To' header
    if (!studentEmail) {
      studentEmail = extractValidStudentEmail(latestMessage.getReplyTo());
    }

    // Step C: Fallback to searching the message body with word boundary protection
    if (!studentEmail) {
      studentEmail = extractValidStudentEmail(body);
    }


    // --- DYNAMIC DURATION CALCULATION ---
    var durationMinutes = 60; // Standard fallback duration if not found
    if (className) {
      var durationMatch = className.match(/\b(60|75|90)\b/);
      if (durationMatch) {
        durationMinutes = parseInt(durationMatch[1], 10);
      }
    }

    // Diagnostic Log Check
    Logger.log("Parsed Data -> Class: " + className + " (" + durationMinutes + " min) | Date: " + classDateStr + " | Time: " + classTimeStr + " | Student: " + studentEmail);

    // Safeguard verification
    if (!studentEmail || !className || !classDateStr || !classTimeStr) {
      Logger.log("❌ Skipping email: Missing critical components.");
      continue;
    }

    // Convert strings into functional JavaScript Date boundaries
    var startDateTime = new Date(classDateStr + "T" + classTimeStr + ":00");
    var endDateTime = new Date(startDateTime.getTime() + durationMinutes * 60 * 1000); // Dynamic class duration allocation

    // --- CALENDAR ENGINES ---
    var existingEvents = calendar.getEvents(startDateTime, endDateTime);
    var targetEvent = null;

    for (var j = 0; j < existingEvents.length; j++) {
      if (existingEvents[j].getTitle() === className) {
        targetEvent = existingEvents[j];
        break;
      }
    }

    // CASE A: IF NO EVENT EXISTS YET -> Create the class and attach Google Meet
    if (!targetEvent) {
      Logger.log("Creating new event for: " + className);

      // Convert standard JS Dates to RFC3339 formats required for a synchronous Insert action
      var startRFC = startDateTime.toISOString();
      var endRFC = endDateTime.toISOString();

      // Build a unified schema resource layout to push the event structure and Meet link simultaneously
      var classDescription = getClassDescription(className);

      var newEventResource = {
        summary: className,
        description: classDescription,
        start: { dateTime: startRFC },
        end: { dateTime: endRFC },
        attendees: [{ email: studentEmail }],
        conferenceData: {
          createRequest: {
            requestId: "meet_" + new Date().getTime(),
            conferenceSolutionKey: { type: "hangoutsMeet" }
          }
        }
      };

      // Inserting directly via the Advanced Service creates the event and links Meet in 1 operation, bypassing patch delays
      Calendar.Events.insert(newEventResource, "primary", { conferenceDataVersion: 1 });

    } else {
      // CASE B: IF EVENT ALREADY EXISTS -> Just add the subsequent student to the existing list
      Logger.log("Appending guest to existing event: " + className);

      // Advanced Service check lookup syntax adaptation to cleanly verify and append attendees list safely without duplication
      var calendarId = "primary";
      var eventIdClean = targetEvent.getId().split('@')[0];
      var liveEvent = Calendar.Events.get(calendarId, eventIdClean);
      var currentAttendees = liveEvent.attendees || [];

      var alreadyAdded = currentAttendees.some(function(attendee) {
        return attendee.email === studentEmail;
      });

      if (!alreadyAdded) {
        currentAttendees.push({ email: studentEmail });
        liveEvent.attendees = currentAttendees;
        Calendar.Events.update(liveEvent, calendarId, eventIdClean, { conferenceDataVersion: 1 });
      } else {
        Logger.log("Student already on the guest list. Skipping.");
      }
    }

    // Swap the labels so the thread transitions cleanly out of processing into history tracking folders
    threads[i].addLabel(processedLabel);
    threads[i].removeLabel(label);
  }
}

// Helper function to safely isolate strings inside email templates
function parseTextBetween(text, startWord, endWord) {
  var startIdx = text.indexOf(startWord);
  if (startIdx === -1) return null;
  startIdx += startWord.length;

  var endIdx = text.indexOf(endWord, startIdx);
  if (endIdx === -1) return null;

  return text.substring(startIdx, endIdx).trim();
}
