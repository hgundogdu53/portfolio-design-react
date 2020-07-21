import React, { Component } from "react";
import TextLoop from "react-text-loop";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">Huseyin Gundogdu</h1>
              <h3>
                I'm a Full Stack Engineer specialize in{" "}
                <TextLoop
                  className={"textloop"}
                  interval={2500}
                  mask={true}
                  adjustingSpeed={800}
                >
                  <div>HTML/CSS</div>
                  <div>JavaScript ES6+</div>
                  <div>Bootstrap</div>
                  <div>Sass</div>
                  <div>React/Redux</div>
                  <div>NodeJS</div>
                  <div>Express</div>
                  <div>Python</div>
                  <div>MongoDB</div>
                  <div>PostgreSQL</div>
                  <div>GraphQL</div>
                  <div>Webpack</div>
                </TextLoop>
              </h3>

              <hr />
              <ul className="social">
                <li>
                  <a
                    href="https://www.linkedin.com/in/huseyin-developer/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/hgundogdu53" target="_blank">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/hgundogdu53" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="scrolldown">
            <a className="smoothscroll" href="#about">
              <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
