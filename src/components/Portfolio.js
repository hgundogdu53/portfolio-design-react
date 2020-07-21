import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row" id="projects-cards">
          <div className="twelve columns collapsed">
            <div className="projects-grid">
              {/* Project 0 - Top  */}
              <Card
                shadow={2}
                style={{ width: "320px", height: "420px", margin: "2vw 3vw" }}
              >
                <CardTitle
                  style={{
                    height: "260px",
                    background:
                      "url(https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg) center / cover",
                  }}
                >
                  Full Stack Project
                </CardTitle>
                <CardText className="card-text">
                  We bring you closer to the people and things you love.
                  Post-iin is where life flows.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/hgundogdu53/post-in"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub{" "}
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href="https://post-iin.herokuapp.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
              {/*Project 1*/}
              <Card
                shadow={2}
                style={{ width: "320px", height: "420px", margin: "2vw 3vw" }}
              >
                <CardTitle
                  style={{
                    height: "260px",
                    background:
                      "url(https://www.icoldo.com/wordpress/wp-content/uploads/2018/02/js_node_js_react_logos-300x225.png) center / cover",
                  }}
                >
                  Full Stack Project
                </CardTitle>
                <CardText className="card-text">
                  Connect your pets with pets from your neighborhood. Full stack
                  application which includes authentication and prevents XSS
                  attacks.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/hgundogdu53/pawUp-clientside"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub{" "}
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href="https://github.com/hgundogdu53/pawUp-API"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub2{" "}
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href="https://pawup-clientside.now.sh"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
              {/* Project 2 */}
              <Card
                shadow={2}
                style={{ width: "320px", height: "420px", margin: "2vw 3vw" }}
              >
                <CardTitle
                  style={{
                    height: "280px",
                    background:
                      "url(https://www.icoldo.com/wordpress/wp-content/uploads/2018/02/js_node_js_react_logos-300x225.png) center / cover",
                  }}
                >
                  Full Stack Project
                </CardTitle>
                <CardText className="card-text">
                  Movie search responsive website which is built by React and
                  Node.js.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/hgundogdu53/movieX-react"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href="https://github.com/hgundogdu53/movieX-Node.js"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub2
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href="https://moviex.now.sh"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
              {/* Project 3 */}
              <Card
                shadow={2}
                style={{ width: "320px", height: "420px", margin: "2vw 3vw" }}
              >
                <CardTitle
                  style={{
                    height: "280px",
                    background:
                      "url(https://www.icoldo.com/wordpress/wp-content/uploads/2018/02/js_node_js_react_logos-300x225.png) center / cover",
                  }}
                >
                  Full Stack Project
                </CardTitle>
                <CardText className="card-text">
                  Noteful application allows you to add and delete notes, which
                  is built by React and Node.js.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/hgundogdu53/noteful-client"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href="https://github.com/hgundogdu53/noteful-server"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub2
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href="https://notefulapp-clientside-3sanb022j.now.sh/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
              {/* Project 4 */}
              <Card
                shadow={2}
                style={{ width: "320px", height: "420px", margin: "2vw 3vw" }}
              >
                <CardTitle
                  style={{
                    color: "white",
                    height: "300px",
                    background:
                      "url(https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover",
                  }}
                >
                  React Project
                </CardTitle>
                <CardText className="card-text">
                  React recipe application which is built by React.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/hgundogdu53/React-recipeApp"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href="https://react-recipe-app.now.sh/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>

              {/* Project 5 */}
              <Card
                shadow={2}
                style={{ width: "320px", height: "420px", margin: "2vw 3vw" }}
              >
                <CardTitle
                  style={{
                    color: "white",
                    height: "280px",
                    background:
                      "url(https://zdnet1.cbsistatic.com/hub/i/2019/04/21/9d791bf2-9b20-476a-bba6-201e622d2a1f/jquery-logo-blue.png) center / cover",
                  }}
                >
                  JQuery Project
                </CardTitle>
                <CardText className="card-text">
                  Quiz application has 10 questions and show correct answer and
                  test result, which is built by jquery.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/hgundogdu53/breakingBad-quizApp"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href="https://hgundogdu53.github.io/breakingBad-quizApp/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
              {/* Project 6 */}
              <Card
                shadow={2}
                style={{ width: "320px", height: "420px", margin: "2vw 3vw" }}
              >
                <CardTitle
                  style={{
                    color: "white",
                    height: "290px",
                    background:
                      "url(https://zdnet1.cbsistatic.com/hub/i/2019/04/21/9d791bf2-9b20-476a-bba6-201e622d2a1f/jquery-logo-blue.png) center / cover",
                  }}
                >
                  JQuery Project
                </CardTitle>
                <CardText className="card-text">
                  Recipe search application covers text and video results which
                  is built by jquery.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/hgundogdu53/Okie-Dokie-Recipe"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href="https://hgundogdu53.github.io/Okie-Dokie-Recipe/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
              {/* Project 7 */}

              <Card
                shadow={2}
                style={{ width: "320px", height: "420px", margin: "2vw 3vw" }}
              >
                <CardTitle
                  style={{
                    color: "white",
                    height: "300px",
                    background:
                      "url(https://zdnet1.cbsistatic.com/hub/i/2019/04/21/9d791bf2-9b20-476a-bba6-201e622d2a1f/jquery-logo-blue.png) center / cover",
                  }}
                >
                  JQuery Project
                </CardTitle>
                <CardText className="card-text">
                  NationalParkApi search application which is built by Jquery.
                </CardText>
                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/hgundogdu53/NationalParkApi"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button colored>
                    <a
                      href="https://hgundogdu53.github.io/NationalParkApi/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
