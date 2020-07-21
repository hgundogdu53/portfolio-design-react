import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of California, Santa Cruz</h3>
                <p className="info">
                  Information Technology
                  <span>&bull;</span>{" "}
                  <em className="date">Oct. 2017 - Sep. 2018</em>
                </p>
                <p>
                  • Describe the fundamentals of networking protocols, including
                  hardware, cabling, industry standards, and connectivity
                  solutions.
                  <br />
                  • Design, code, and deploy a cloud-focused tool or
                  application. Differentiate between software-defined data
                  centers (SDDC) and software-as-a-service (SAAS).
                  <br />• Use an Oracle database to design an
                  entity-relationship diagram (ERD) and implement a working
                  database.
                  <br />• Understand current security challenges, security
                  models and technologies available to solve these problems.
                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Gebze Technical University</h3>
                <p className="info">
                  Electronic Engineering
                  <span>&bull;</span>{" "}
                  <em className="date">Sep. 2017 - Nov. 2014</em>
                </p>
                <p>Bachelor of Engineering.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Swaypay</h3>
                <p className="info">
                  Front End Engineer
                  <span>&bull;</span>{" "}
                  <em className="date">Dec. 2019 - Present</em>
                </p>
                <p>
                  • Designed reusable user interface components in React and
                  JavaScript, managed application state using Redux.
                  <br />
                  • Deliver engaging user experience through optimization of
                  code and cross-browser compatibility, which reduced page load
                  times by up to 20% <br /> • Collaborate with designers and
                  back-end developers to implement and improve features. <br />{" "}
                  • Manage complex details about projects that require analyzing
                  design requirements, recommending technical solutions to make
                  projects scalable, maintainable, and efficient.
                </p>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>Thinkful</h3>
                <p className="info">
                  Full Stack Engineer Apprentice
                  <span>&bull;</span>{" "}
                  <em className="date">May 2019 - Dec 2019</em>
                </p>
                <p>
                  • Learned industry best practices and practical software
                  development standards with a focus on HTML5, CSS3, JavaScript,
                  jQuery, Node.js, React, Redux, and algorithms & data
                  structures. <br /> • Created and deployed mobile-first
                  commercial applications while learning new languages and
                  frameworks by collaborating several hours every week with a
                  senior web developer.
                </p>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>SwayPay</h3>
                <p className="info">
                  Full Stack Engineer Intern
                  <span>&bull;</span>{" "}
                  <em className="date">Sep 2018 - Feb 2019</em>
                </p>
                <p>
                  • Developed using HTML/CSS, JS, JQuery and React to enhance
                  functionality and user experience on web pages. <br />• Worked
                  with Senior Developer to write code from scratch and to manage
                  complex design projects for hotel clients. <br />• Edited
                  existing codes to improve browser compatibility and mobile
                  responsiveness. <br />• Participated in weekly Tech team
                  meetings to discuss current and future projects and strategies
                  on how to produce efficient work.
                  <br /> • Involved in developing Amazon EC2, Amazon S3, Amazon
                  RDS, Amazon Elastic Load Balancing, Amazon SWF, Amazon SQS,
                  and other services of the AWS infrastructure.
                </p>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>Private Youth Center</h3>
                <p className="info">
                  Mathematician
                  <span>&bull;</span>{" "}
                  <em className="date">Jan 2015 - Feb 2017</em>
                </p>
                <p>
                  • Teaching algebra, geometry, and calculus for high school and
                  freshman college students. <br /> • Setting academic goals for
                  students to achieve. <br /> • Making appropriate connections
                  with students to acknowledge their academic development and
                  achievements. <br /> • Working collaboratively with students
                  and their families to achieve best outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
