import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/my-icon.png" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Hi, there! This is Huseyin Gundogdu who currently lives in San
              Francisco Bay Area. I am an enthusiast to develop responsive
              websites, especially using HTML/CSS, Bootstrap, JavaScript,
              JQuery, React, NodeJS, Express, NextJS, MongoDB, GraphQL and
              PostgreSQL. Besides that, Cloud computing is one of the my
              interests and I achieved AWS Solution Architect-Associate
              certificate. Outside of coding, my interest areas are swimming,
              soccer, hiking and black tea. Feel free to get in touch by any
              means of communication.
            </p>

            {/* <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>{resumeData.website}</span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
