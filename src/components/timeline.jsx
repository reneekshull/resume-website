import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Program Manager at Amazon{" "}
                          <span>October 2019 - Present</span>
                        </h2>
                        <p>
                          I work as a Program Manager for the Legal Records team
                          within the Legal Tech org. I specialize in creating
                          automated solutions for unnecessarily manual work,
                          using tools that will be sustainable for non-tech
                          employees to maintain.{" "}
                        </p>
                        <p>
                          • Launched a customer-facing team website. Unique
                          website views increased by 200% during the year after
                          launch{" "}
                        </p>
                        <p>
                          • Created an AWS QuickSight dashboard with live
                          visualizations of all Amazon Legal electronic records,
                          based on over 20 years of record data (saved in AWS S3
                          buckets){" "}
                        </p>
                        <p>
                          • Developed and Introduced a website (in HTML, CSS,
                          and JavaScript) for semi-automated customer data
                          review, intended to be accessed by over 700 employees
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          iOS Intern at Microsoft{" "}
                          <span>June 2019 - August 2019</span>
                        </h2>
                        <p>
                          Developed an iOS-based productivity app (in Swift)
                          dedicated to work/life balance. The app displayed the
                          agenda based on time of day, and displayed
                          personalized emotional-wellbeing statistics related to
                          productivity. My team Conducted research at 4 stages
                          of app development, after creating user stories and
                          determining target audiences for best feedback
                          potential.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Legal Assistant at Amazon{" "}
                          <span> August 2017 - November 2018</span>
                        </h2>
                        <p>
                          I worked closely with our internal and external
                          customers to process over 1000 contracts per week. I
                          maintained a highly variable 4,000,000+ row database
                          of website usage statistics, and converted that raw
                          data into an interactive VBA-based dashboard that was
                          used for monthly VP presentations.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
