import { Schedule, ScheduleComponent } from "./ScheduleComponent.js";

class App {
  static init() {
    console.log('app started....');

    let scheduleComponent = new ScheduleComponent({
      componentHtmlId: "main-schedule-component",
      schedules: []
    });

    scheduleComponent.renderComponent();
  }
}

document.addEventListener('DOMContentLoaded', App.init);