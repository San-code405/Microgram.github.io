
  class DigitalClock {
  constructor(element) {
    this.element = element;
  }

    start() {
      setInterval(() => {
        this.update();
      }, 500);
    }

   update() {
      const parts = this.getTimeParts();
      const minuteFormatted = parts.minute.toString().padStart(2, "0");
      const amPm = parts.isAm ? "AM" : "PM";
      const timeFormatted = parts.hour + ':' + minuteFormatted + ' ' + amPm;


    this.element.querySelector(".clock-time").textContent = timeFormatted;

    }

    getTimeParts() {
      const now = new Date();
      return {
        hour: now.getHours() % 12 || 12,
        minute: now.getMinutes(),
        isAm: now.getHours() < 12
      };
    }
  }

  const clockElement = document.querySelector(".clock");
  const clockObject = new DigitalClock(clockElement);

  clockObject.start();
