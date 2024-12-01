import { Container, Row, Col, Pagination } from "react-bootstrap";
import fotor from "../assets/img/fotor-ai-20241128104747.jpg";
import projImg2 from "../assets/img/fotor-ai-20241128104755.jpg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState } from "react";

export const Certificates = () => {
  const projects2 = [
    {
      title: "Workshop Certificates",
      description: "Certificates from workshops showcasing skills and expertise in various domains.",
      imgUrl: "https://th.bing.com/th/id/OIG4.ungfW9fbO0VPNeTKGH4D?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://drive.google.com/drive/folders/1v1Iqs8OoidsKh-E34A-JVDzsmVSDa3Q-?usp=sharing",
    },
    {
      title: "Programming Certificates",
      description: "Certificates in programming languages and development frameworks, enhancing coding expertise.",
      imgUrl: "https://th.bing.com/th/id/OIG4.AnKZBs9DRNg3JdlLmLfB?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://drive.google.com/drive/folders/1Dl0UTsP13SPTUfSYx0XeSeSHbrvqNZlD?usp=sharing",
    },
    {
      title: "Softskill Certificates",
      description: "Certificates in communication, leadership, and teamwork, boosting professional soft skills.",
      imgUrl: "https://th.bing.com/th/id/OIG1.__74kB7.Ydp4ol892EXY?w=1024&h=1024&rs=1&pid=ImgDetMain",
      sourceUrl: "https://drive.google.com/drive/folders/1JEJr8pbvLTJTPUox9bI_8lzLi45EJQA0?usp=sharing",
    },
  ];

  // Pagination state
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 3;

  const handlePagination = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const paginatedProjects = projects2.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Certificates</h2>
                  <p>List of certificates earned from workshops, courses, and training programs, showcasing expertise in various technologies and methodologies.</p>

                  <Row>
                    {paginatedProjects.map((project, index) => (
                      <Col sm={4} key={index}>
                        <div className="proj-imgbx">
                          <img src={project.imgUrl} alt={project.title} className="d-block w-100" />
                          <div className="proj-txtx">
                            <h4>{project.title}</h4>
                            <span>{project.description}</span>
                            <br />
                            <br></br>
                            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                              <button className="btn">View Certificates</button>
                            </a>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>

                  {/* Custom Centered Dot Pagination */}
            
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
