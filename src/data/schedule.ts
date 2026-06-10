// Type definitions
export interface StartTime {
  id: number;          // e.g. 830 or 1030
  label: string;       // e.g. "08:30" or "10:30"
  minutes: number;     // minutes from midnight
}

export interface ClassEntry {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  startId: number;       // references StartTime.id (foreign key)
  duration: number;    // minutes
  label: string;       // e.g. "Yoga 75", "26+2 Express"
}

export interface ScheduleData {
  startTimes: StartTime[];
  classes: ClassEntry[];
}

// Data for the schedule grid, including start times and class entries. This is imported by ScheduleGrid.astro
export const scheduleData: ScheduleData = {
  "startTimes": [
    { "id": 830, "label": "08:30", "minutes": 510 },
    { "id": 1000, "label": "10:00", "minutes": 600 },
    { "id": 1230, "label": "12:30", "minutes": 750 },
    { "id": 1415, "label": "14:15", "minutes": 855 },
    { "id": 1445, "label": "14:45", "minutes": 885 },
    { "id": 1600, "label": "16:00", "minutes": 960 },
    { "id": 1800, "label": "18:00", "minutes": 1080 }
  ],

  "classes": [
    { "day": "Mon", "startId": 830, "duration": 75, "label": "Yoga 75" },
    { "day": "Thu", "startId": 830, "duration": 75, "label": "Yoga 75" },
    { "day": "Fri", "startId": 830, "duration": 60, "label": "Yoga 60" },

    { "day": "Mon", "startId": 1000, "duration": 75, "label": "Yoga 75" },
    { "day": "Thu", "startId": 1000, "duration": 75, "label": "Yoga 75" },
    { "day": "Fri", "startId": 1000, "duration": 75, "label": "Yoga 75" },

    { "day": "Mon", "startId": 1230, "duration": 60, "label": "Yoga 60" },
    { "day": "Wed", "startId": 1230, "duration": 60, "label": "Yoga 60" },
    { "day": "Thu", "startId": 1230, "duration": 60, "label": "Yoga 60" },
    { "day": "Fri", "startId": 1230, "duration": 60, "label": "26+2 Express" },

    { "day": "Mon", "startId": 1415, "duration": 60, "label": "Yoga 60" },
    { "day": "Wed", "startId": 1415, "duration": 60, "label": "26+2 Express" },
    { "day": "Fri", "startId": 1415, "duration": 60, "label": "Yoga 60" },

    { "day": "Thu", "startId": 1445, "duration": 60, "label": "Yoga 60" },
    { "day": "Sat", "startId": 1445, "duration": 60, "label": "Yoga 60" },
    { "day": "Sun", "startId": 1445, "duration": 60, "label": "Yoga 60" },

    { "day": "Wed", "startId": 1600, "duration": 60, "label": "Yoga 60" },
    { "day": "Thu", "startId": 1600, "duration": 60, "label": "26+2 Express" },
    { "day": "Fri", "startId": 1600, "duration": 90, "label": "Yoga 90" },
    { "day": "Sat", "startId": 1600, "duration": 90, "label": "26+2" },
    { "day": "Sun", "startId": 1600, "duration": 90, "label": "Yoga 90" },

    { "day": "Fri", "startId": 1800, "duration": 75, "label": "Yoga 75" },
    { "day": "Sat", "startId": 1800, "duration": 75, "label": "Yoga 75" },
    { "day": "Sun", "startId": 1800, "duration": 75, "label": "Yoga 75" }
  ]
}
