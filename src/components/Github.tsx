import * as React from "react";

const Github = () => {
    return (
      <section className="github section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">My GitHub</h2>
          <p>You can embed your GitHub contribution graph calendar using IonicaBizau's <a href="https://github.com/IonicaBizau/github-calendar" target="_blank">GitHub Calendar</a> widget.</p>

          <div id="github-graph" className="github-graph">
            <div className="calendar">
              Loading the data just for you.
            </div>
          </div>

          <p>You can also embed your GitHub activities using Casey Scarborough's <a href="https://github.com/caseyscarborough/github-activity" target="_blank">GitHub Activity Stream</a> widget.</p>
          <div id="feed"></div>
          <div id="ghfeed" className="ghfeed">
          </div>

        </div>
      </section>
    );
  }
export default Github;