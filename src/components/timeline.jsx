import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">WHY / HOW / WHAT</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Why<span></span></h2>
                        <p>So why hire a UX Designer at all, couldn't you just create your product or service and get it on the market? Sure you can and a lot of others have done just that. Some were successful and some not so much. 
Having a UX Designer onboard is not going to guarantee success, that is up to you and what you sell. But, a UX Designer, like me, can help you get on the right path faster and save you money in the long run by avoiding pit-falls and expensive do-overs when you realize that you missed the real target group. 
This is one of the reasons why UX Design is a great investment before, during and after the project is launched.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>How<span></span></h2>
                        <p>I ask questions - a lot of questions. I ask questions because they help me pinpoint the areas where your users struggle with your product or service. From the answers I receive, either from user interviews or surveys or both as well as from you, I analyze the data to define the best way of solving the issues that are keeping your business from reaching its true potential.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>What<span></span></h2>
                        <p>As a UX Designer, I look deeply into what your key product or service is, who are the target users and how do they interact with your business and what your business goals are. This is a vital part of the process as this is where I can help improve the way your product engages with its users as well as uncover any hidden potential there might be or even develop new products or services.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
