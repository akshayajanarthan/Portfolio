import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Picture1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Diabetics Prediction System",
      description: "Developed an ML model with a Flask-based prediction interface.",
      imgUrl: "https://th.bing.com/th/id/OIG2.CRloz0JYvZApQOjca2eu?pid=ImgGn",
      sourceUrl: "https://github.com/akshayajanarthan/Diabetics-Prediction-System"
    },
    {
      title: "Face And Gender Prediction",
      description: "Developed a face and gender prediction system using Java and CNN.",
      imgUrl: "https://th.bing.com/th/id/OIG2.Daw8zOXCfZWsDqq3eh9S?pid=ImgGn",
      sourceUrl: "https://github.com/akshayajanarthan/Face-detection-with-gender-and-age-prediction"
    },
    {
      title: "Mp3 Player",
      description: "Created a Tkinter-based MP3 player with browsing, controls, and metadata.",
      imgUrl: "https://th.bing.com/th/id/OIG2..vqSIrxWPPWqg4UWnQXI?pid=ImgGn",
      sourceUrl: "https://github.com/akshayajanarthan/MP3-Player-Application"
    },
    {
      title: "Online Pharmacy",
      description: "Developed an online pharmacy using HTML, CSS, and JavaScript for functionality.",
      imgUrl: "https://th.bing.com/th/id/OIG3.48JpgM5jD1CyKCxNVsAT?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://github.com/akshayajanarthan/Online-Pharmacy"
    },
    {
      title: "Blackswan",
      description: "A movie recommendation system integrated TMDB API for movie data, with personalized recommendations and user authentication.",
      imgUrl: "https://th.bing.com/th/id/OIG3.ywj3GeX.CN8m_5wPeLvu?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://github.com/akshayajanarthan/Movie-Recommendation-System-BlackSwan-"
    },
    {
      title: "Clinical Trail Finder & Notifier",
      description: "Developed a clinical trial finder & notifier using React, Node.js, and NodeMailer for email notifications.",
      imgUrl: "https://th.bing.com/th/id/OIG1.IhWQLq3nsKnR.qJP7pQ4?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://github.com/akshayajanarthan/Clinical-Trail-Finder"
    },
    {
      title: "ESP-32 Cam Object Detection and Recoginzation",
      description: "Built an object detection and recognition system using ESP32-Cam and CNN algorithm.",
      imgUrl: "https://th.bing.com/th/id/OIG3.614k7y_lzcysQ2AFKOFk?pid=ImgGn",
      sourceUrl: "https://github.com/akshayajanarthan/Object-Detection-using-ESP-Sensors-and-CNN-Algorithm"
    },
    { 
      title: "Safety Gear Detection System",
      description: "Developed a safety gear recommendation system based on safety guidelines and user needs.",
      imgUrl: "https://th.bing.com/th/id/OIG3.TzIVKI5.aO6LbKHnOSpZ?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://github.com/akshayajanarthan/Safety-Gear-Detection-System"
    },
    {
      title: "Spammy",
      description: "Developed a spam email classification system using Gmail API and machine learning.",
      imgUrl: projImg1,
      sourceUrl: "https://github.com/akshayajanarthan/Spam-Mail-Classifier-Using-Gmail-API"
    },
  ];

  const projects2 = [
    {
      title: "Data Science Models",
      description: "This collection showcases my expertise in developing, implementing, and optimizing data-driven solutions across various domains.",
      imgUrl:"https://th.bing.com/th/id/OIG4.Z8pZVSa8_1TaHwA6wKKD?pid=ImgGn",
      sourceUrl: "https://github.com/akshayajanarthan/Data-Science-Models"
    },
    {
      title: "Machine Learning Models",
      description: "Showcasing expertise in building and optimizing machine learning models for impactful, data-driven solutions across domains.",
      imgUrl: "https://th.bing.com/th/id/OIG4.ATo7d6Ey0arIC3Ryp3h8?pid=ImgGn",
      sourceUrl: "https://github.com/akshayajanarthan/Machine-Learning-Models"
    },
    {
      title: "Power BI Models",
      description: "Demonstrating expertise in crafting insightful Power BI models, delivering data-driven dashboards and actionable visualizations.",
      imgUrl: "https://th.bing.com/th/id/OIG4.efxUDjqgDki_SBFuNcu1?pid=ImgGn",
      sourceUrl: "https://github.com/akshayajanarthan/Power-BI-Model"
    },
  ];

  const projects3 = [
    {
      title: "Event Management Website",
      description: "Crafted intuitive event management website with seamless navigation using Figma",
      imgUrl:"https://th.bing.com/th/id/OIG4.jIjZz5883gE3N9fkO02n?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://www.figma.com/design/IGtW8bgXSb3m5oNVSiU8KI/Untitled?node-id=0-1&t=UK47d6U5GXZqYIpQ-1"
    },
    {
      title: "Food Delivery App",
      description: "Designed a food delivery app that lets users browse restaurants, select food, and track orders in real time.",
      imgUrl: "https://th.bing.com/th/id/OIG1.HN0QzUXliLOuhuUBATj.?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://www.figma.com/design/17HeG6y8EOctoNksqEEc60/Untitled?node-id=0-1&t=Aw7xKJPR0f0LMp8V-1"
    },
    {
      title: "E-Commerce Website",
      description: "Design a modern e-commerce site or mobile app, including product pages, cart, and checkout process.",
      imgUrl: "https://th.bing.com/th/id/OIG4.xGZ8rXkOHyxHcb6ga4he?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://www.figma.com/design/V4pUEoZXpmRL4UlCpklWNr/E-Commerce?node-id=0-1&t=sCM9T14fs2XG2jdW-1"
    },
    {
      title: "Fitness Tracking App",
      description: "Designed an app that helps users track their fitness journey, such as workout routines, progress monitoring, and nutrition tracking.",
      imgUrl: "https://th.bing.com/th/id/OIG2.GQqi7PAEmdBxjO8yvrHu?pid=ImgGn",
      sourceUrl: "https://www.figma.com/design/tn3Kgg8J8SJAXTkW7eIgwx/Fitness-Tracking-App?t=G9VCIcJYkmcafh8D-1"
    },
    {
      title: "Travel Booking App",
      description: "Designed a travel booking platform that allows users to search and book flights, hotels, and activities.",
      imgUrl: "https://th.bing.com/th/id/OIG1.FNV42g4721KPKLrdGj62?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://www.figma.com/design/IKTFqs1ImRogNhfFbMN97M/Travel-Booking-App?node-id=0-1&t=yb2lFOSKosbyn0ro-1"
    },
    {
      title: "Online Education Platform",
      description: "Designed a platform for online learning that includes features such as course listings, video lectures, and discussion forums.",
      imgUrl: "https://th.bing.com/th/id/OIG1.vzIAXDbUuLV5tdNaFA0q?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://www.figma.com/design/TrXthU0bj2ZfjPYk1IqPkY/Online-Education-Platform?t=dIaJek2Kcvlb3PK8-1"
    },
  ];

  const projects4 = [
    {
      title: "Medical Purpose Hologram",
      description: "Developing a holographic display for 3D medical images to enhance diagnostics.",
      imgUrl:"https://th.bing.com/th/id/OIG3.MZCcrEz6K87suEOGFTjb?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://github.com/akshayajanarthan/Medical-Purpose-Hologram"
    },
    {
      title: "Online Learning Website LMS",
      description: "Developing an online learning platform with interactive features for effective learning management.",
      imgUrl:"https://th.bing.com/th/id/OIG1.voToZSKvUKl9FpygZ8g6?pid=ImgGn",
      sourceUrl: "https://github.com/akshayajanarthan/Online-Learning-Website-LMS"
    },
    {
      title: "Flowchart Generator AI",
      description: "Developing an AI-powered flowchart generator for automated diagram creation.",
      imgUrl:"https://th.bing.com/th/id/OIG4.TcSV4hndyvsLtJQJsgZ4?pid=ImgGn",
      sourceUrl: "https://github.com/akshayajanarthan/Flowchart-Generator-AI"
    },
  ]


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={90}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web pages</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Models</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Designing</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">On-Going</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <Col key={index} sm={6} md={4}>
                                  <div className="proj-imgbx">
                                    <img src={project.imgUrl} alt={project.title} />
                                    <div className="proj-txtx">
                                      <h4>{project.title}</h4>
                                      <span>{project.description}</span>
                                      <br></br>
                                      <br></br>
                                        &nbsp;&nbsp;&nbsp;
                                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="btn">View Source</button>
                                      </a>
                                    </div>
                                  </div>
                                </Col>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <Col key={index} sm={6} md={4}>
                                  <div className="proj-imgbx">
                                    <img src={project.imgUrl} alt={project.title} />
                                    <div className="proj-txtx">
                                      <h4>{project.title}</h4>
                                      <span>{project.description}</span>
                                      <br></br>
                                      <br></br>
                                        &nbsp;&nbsp;&nbsp;
                                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="btn">View Source</button>
                                      </a>
                                    </div>
                                  </div>
                                </Col>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <Col key={index} sm={6} md={4}>
                                  <div className="proj-imgbx">
                                    <img src={project.imgUrl} alt={project.title} />
                                    <div className="proj-txtx">
                                      <h4>{project.title}</h4>
                                      <span>{project.description}</span>
                                      <br></br>
                                      <br>
                                      </br>
                                        &nbsp;&nbsp;&nbsp;
                                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="btn">View Source</button>
                                      </a>
                                    </div>
                                  </div>
                                </Col>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {
                            projects4.map((project, index) => {
                              return (
                                <Col key={index} sm={6} md={4}>
                                  <div className="proj-imgbx">
                                    <img src={project.imgUrl} alt={project.title} />
                                    <div className="proj-txtx">
                                      <h4>{project.title}</h4>
                                      <span>{project.description}</span>
                                      <br></br>
                                      <br>
                                      </br>
                                        &nbsp;&nbsp;&nbsp;
                                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="btn">View Source</button>
                                      </a>
                                    </div>
                                  </div>
                                </Col>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
};
