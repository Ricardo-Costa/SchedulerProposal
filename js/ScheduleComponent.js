class Schedule
{
  /**
   * @param {string} title 
   * @param {Date} startDate 
   * @param {Date} endDate 
   */
  constructor(title, startDate, endDate)
  {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class ScheduleComponentConfigs
{
  /**
   * @param {string} componentHtmlId 
   * @param {Schedule[]} schedules 
   */
  constructor(componentHtmlId, schedules)
  {
    this.componentHtmlId = componentHtmlId;
    this.schedules = schedules;
  }
}

class ScheduleComponent
{
  /**
   * @param {ScheduleComponentConfigs} param 
   */
  constructor({ componentHtmlId, schedules })
  {
    if (!componentHtmlId) throw new Error("Component Html Id is required to render component.");
    if (!(schedules instanceof Array)) throw new Error("Error, schedules is not an Array instance.");

    this.scheduleComponentConfigs = new ScheduleComponentConfigs(componentHtmlId);
    this.schedules = schedules;

    /** @var {HTMLElement|null} */
    this.componentElement = this.retrieveElement();
  }

  retrieveElement()
  {
    let componentElement = document.getElementById(this.scheduleComponentConfigs.componentHtmlId);
    if (!componentElement) {
      throw new Error(`Invalid Tag element with ID "${this.scheduleComponentConfigs.componentHtmlId}" to render component.`);
    }

    return componentElement;
  }

  /**
   * @param {Schedule} schedule 
   * @returns {string}
   */
  formatScheduleElement(schedule)
  {
    return ``
  }

  getBasicComponentLayout()
  {
    let schedulesToRender = '';

    const mainData = {
      "20231104": {
        times: {
          "00:00": {// hour
            "1": "", // minutes
            "2": ""
          },
          "01:00": {
            "00:01": "",
            "2": ""
          }
        }
      }
    };

    return `
      <div class="schedule-container">
        <div class="schedule-header">
          <div class="schedule-header-left">
            <button>Add Vod</button>
          </div>
          <div class="schedule-header-center">
            <button>Week</button>
            <button>List</button>
          </div>
          <div class="schedule-header-right">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
        <div class="schedule-body schedule-body-week">

          <div class="schedule-week-day">
            <div class="schedule-week-day-label">Monday</div>
            <div class="schedule-week-day-container">
              <div class="schedule-week-day-hour">
                <div class="day-hour">00:00</div>
                <div class="day-hour">01:00</div>
                <div class="day-hour">02:00</div>
              </div>
              <div class="schedule-week-day-content">
                <div class="day-content-off">off...</div>
                <div class="day-content-off">off...</div>
                <div class="day-content-off">off...</div>
              </div>
            </div>
          </div>

          <div class="schedule-week-day">
            <div class="schedule-week-day-label">Tuesday</div>
            <div class="schedule-week-day-container">
              <div class="schedule-week-day-hour">
                <div class="day-hour">00:00</div>
                <div class="day-hour">01:00</div>
                <div class="day-hour">02:00</div>
              </div>
              <div class="schedule-week-day-content">
                <div class="day-content-off">off...</div>
                <div class="day-content-set">Piratas do Caribe</div>
                <div class="day-content-set">Piratas do Caribe</div>
              </div>
            </div>
          </div>

        </div>
        <div class="schedule-footer">footer here...</div>
      </div>    
    `;
  }

  renderComponent()
  {
    this.componentElement.innerHTML = this.getBasicComponentLayout();
  }
}

export {
  Schedule,
  ScheduleComponent
};