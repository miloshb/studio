// src/scripts/thankyou.js
(function() {
  // 1. Locate the raw data string injected into the data attribute by the Astro template
  const container = document.getElementById("thankyou-content-container");
  if (!container) return;

  const rawMessagesJson = container.dataset.messages;
  if (!rawMessagesJson) return;

  try {
    const messages = JSON.parse(rawMessagesJson);

    // 2. Read parameters directly from the browser window URL object
    const searchParams = new URLSearchParams(window.location.search);
    const source = searchParams.get("source");

    // 3. Match keys against the passed dictionary configuration
    const key = source && (source in messages) ? source : "default";
    const matchedContent = messages[key];

    // 4. Update the structural UI nodes dynamically
    if (key !== "default") {
      const titleNode = document.getElementById("thankyou-title");
      const bodyNode = document.getElementById("thankyou-body");

      if (titleNode) titleNode.textContent = matchedContent.title;
      if (bodyNode) bodyNode.textContent = matchedContent.body;

      // Update the tab title to match
      document.title = `${matchedContent.title} – Studio Sun & Sea`;
    }
  } catch (error) {
    console.error("Failed to parse dynamic content payload:", error);
  }
})();
