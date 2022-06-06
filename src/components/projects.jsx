import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/optihook-card-front.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Optihook</a></h3>
											<span>UX Consulting & Development of Shopify E-Commerce Website</span>
											<p className="icon">
												<span><a href="https://www.optihook.com" target={"blank"}><i className="icon-share3" /></a></span>
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/ferrari-card-front.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Ferrari Owners' Club Denmark</a></h3>
											<span>UX Design & development of Wordpress Membership and Event Website for the official Ferrari Owners' Club in Denmark.</span>
											<p className="icon">
												<span><a href="https://www.laboite.dk/ferrari/" target={"blank"}><i className="icon-share3" /></a></span>
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/danitacom-card-front.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Italian Chamber of Commerce in Denmark</a></h3>
											<span>UX Design & Development of Wordpress Business Website</span>
											<p className="icon">
												<span><a href="https://www.danitacom.org" target={"blank"}><i className="icon-share3" /></a></span>
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/upnorth-card-front.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Upnorth</a></h3>
											<span>Web Design & Development of Wordpress Cabin Rental Website</span>
											<p className="icon">
												<span><a href="https://www.upnorth.ch" target={"blank"}><i className="icon-share3" /></a></span>
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/tshirt-card-front.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Goya T-Shirt</a></h3>
											<span>Personal Project: Graphic, Illustration & T-Shirt print</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/stroke-card-front.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Stroke Rehabilitation App</a></h3>
											<span>Personal Project: UX Design:  <br/> User Research - surveys and user interviews, Data Analysis, Personas, Journey Map, Ideation, Wireframing</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								{/* <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p> */}
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
