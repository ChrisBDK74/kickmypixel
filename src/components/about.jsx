import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Danish Web & UX Designer living in Japan with my wife and our 3 year old son.
                        I have two superpowers: Empathy and Problem Solving!
                        I am passionate about creating better and more usable products and services for everyone, not just “target groups”. <br></br>
                        Through the past 15+ years as a freelance web designer, I have learned and used many elements and principles of UX Design. Now I am focusing on UX Design full time as this is my true passion! 
                        When I am not thinking or dreaming about UX Design, I love to discover the world with my wife and son and, depending on the destination, go scuba diving.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>UX Design </h3>
                    <p>UX Research (primary & secondary), User Interviews, Surveys, Data Analysis, Persona creation, Journey Mapping, Storyboarding, Wireframing, Prototyping and more.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Content Management Systems</h3>
                    <p>I have worked with several different CMS's including Wordpress, Shopify and Joomla through the past 15+ years and have extensive experience with these systems.  </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Consulting</h3>
                    <p>As a UX Designer, I often act as a consultant when it comes to my clients projects, even long after the handover and many times a project turns into a work-relationship.</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>My Toolbox</h3>
                    <p>I use a variety of tools, the most important ones being pen and paper, to create the best solutions for my clients:<br/>Figma/Figjam, Adobe: PS / AI / XD, VS Code, Miro, Trello, Balsamiq, InVision </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Certifications:</h3>
                    {/* <p>My friend knows .. P</p> */}
                    <ul className='certified'>
                        <li>Coursera: Foundations of User Experience (UX) Design</li>
                        <li>UX Audit</li>
                        <li>UX Design / User Experience Design - Theory</li>
                        <li>Information Architecture Fundamentals</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Languages:</h3>
                    <p>I speak several languages fluently:<br/>Danish, Swedish. English and German.<br/> And a few languages where I can make myself understood: Japanese, French, Spanish. </p>
                </div>
                </div>
            </div>
           
            </div>
        </div>
        </section>
      </div>
    )
  }
}
