class ScheduleComponentConfigs
{
  constructor(componentHtmlId)
  {
    this.componentHtmlId = componentHtmlId;
  }
}

class ScheduleComponent
{
  /**
   * @param {ScheduleComponentConfigs} param 
   */
  constructor({ componentHtmlId })
  {
    if (!componentHtmlId) throw new Error("Component Html Id is required to render component.");

    this.scheduleComponentConfigs = new ScheduleComponentConfigs(componentHtmlId);

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

  getBasicComponentLayout()
  {
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
                <div class="day-content-off"></div>
                <div class="day-content-off"></div>
                <div class="day-content-off"></div>
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
                <div class="day-content-off"></div>
                <div class="day-content-set">Piratas do Caribe</div>
                <div class="day-content-set"></div>
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

export default ScheduleComponent;