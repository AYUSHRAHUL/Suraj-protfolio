import React from "react";
import "./ProjectCSS.css";
import Projectitem from "./Projectitem";

import cutm_result_portal from "../../images/projectImages/2.png";
import job_khojo from "../../images/projectImages/1.png";
import exam_portal from "../../images/projectImages/exam_portal.png";

const Project = () => {
  const projectData = [
    {
       
      name: "Intelligent Weather Dashboard",
      description:
        "A cloud-based web application that provides real-time weather updates, live city search, and 5-day forecasts with visual charts. Built using React.js (Vite) and integrated with OpenWeatherMap APIs for weather and air quality data. Features an AI-powered travel assistant (OpenAI API) that offers smart travel advice, safety alerts, and packing suggestions. Deployed globally on AWS Amplify/S3 with version control managed via GitHub.",
languages: " Cloud| Cloud Computing |API |React.js| Internet Integration"
,      image: cutm_result_portal,
      
    },
    {
     
      name: " Smart IoT-Based RFID Attendance System",
      description:
      "Smart IoT-Based RFID Attendance System – Designed and developed an automated attendance system using NodeMCU and RFID RC522. Integrated hardware with a PHP–MySQL web dashboard (XAMPP) to display real-time attendance data, including user details, time-in, and time-out. Implemented login/logout and attendance modules, ensuring accurate and reliable tracking through effective hardware–software integration.",
      languages: " Embedded Systems |Proteus |Arduino| Arduino UNO |Protocols| GPS| RTC| Sensors |Testing Debugging",
 
      image: job_khojo,
      
    } 
     
  ];

  return (
    <>
      <div id="Projects" className="projects-section">
        <h2>
          <i className="fas fa-project-diagram"></i> Projects
        </h2>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <Projectitem
              key={`${project.name}-${index}`}
              index={index}
              name={project.name}
              description={project.description}
              languages={project.languages}
              image={project.image}
              sourceCodeLink={project.sourceCodeLink}
              deployedLink={project.deployedLink}
              projectType={project.projectType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
