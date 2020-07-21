import React, { Component } from "react";
export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <footer>
            <div className="row">
              <div className="twelve columns">
                <ul className="social-links">
                  <li>
                    <a
                      href="tel:6507533260"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-phone-square" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hgundogdu53@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/huseyin-developer/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/hgundogdu53" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
                <ul className="copyright">
                  <li>© Copyright 2020 Huseyin Gundogdu</li>
                </ul>
              </div>
              <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#home">
                  <i className="icon-up-open" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </section>
    );
  }
}
