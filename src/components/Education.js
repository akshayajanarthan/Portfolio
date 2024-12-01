import React from "react";

export const Education = () => {
  return (
    <div className="timeline-container">
      {/* Timeline Header */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Education</h2>
      <br></br>
      <br></br>
      {/* Timeline Boxes */}
      <div className="timeline-box-container">
        {/* Master's Degree */}
        <div className="timeline-box education">
          <h3 align='center'>2023 - Present</h3>
          <h4 align='center'>Master's in Computer Science - <span>University of Madras | Full-time</span></h4>
          <h1 align='center' font-size= '20px'>Pursuing with a focus on Advanced Computer Technologies.</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://drive.google.com/drive/folders/1mZByLgjEKiSWaQAMK8B3tpUsYDsrLb4c?usp=drive_link" align="center" className="btn">
            View More
          </a>
        </div>
        <div className="timeline-box education">
          <h3 align='center'>2020 - 2023</h3>
          <h4 align='center'>Bachelor's In Computer Science - <span>JNN Arts and Science Women's College | Full-time</span></h4>
          <h1 align='center'>Graduated with a 9.07 GPA.</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://drive.google.com/drive/folders/1Ut_DkHRIq3EkkllKAHuNK9poob0sJ21r?usp=sharing" align="center" className="btn">
            View More
          </a>
        </div>
        {/* Higher Secondary */}
        <div className="timeline-box education">
          <h3 align='center'>2018 - 2020</h3>
          <h4 align='center'>Higher Secondary - <span>Elite Matriculation Higher Secondary School</span></h4>
          <h1 align='center'>Completed with a basic computer knowledge.</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://drive.google.com/drive/folders/1POkf6-KCOmvN4h6GgxZ528bPTyLQS-01?usp=sharing" align="center" className="btn">
            View More
          </a>
        </div>

        {/* Secondary Education */}
        <div className="timeline-box education">
          <h3 align='center'>2017 - 2018</h3>
          <h4 align='center'>Secondary Education (Class 10th)- <span>St. Mary's Girls Higher Secondary School</span></h4>
          <h4 align='center'>Completed (Class 10th) with 78.2% marks.</h4>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://drive.google.com/drive/folders/1V6CSjrzcE2LFhUn06O9_cg3RUcNUQadT?usp=sharing" align="center" className="btn">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};
