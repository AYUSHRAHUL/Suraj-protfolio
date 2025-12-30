import React from "react";
import { motion } from "framer-motion";
import "./EducationCSS.css";

const Education = () => {
  return (
    <div id="Education" className="education-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <i className="fa-solid fa-user-graduate"></i> Education
      </motion.h2>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <div className="education-row">
          <span className="institute">Centurian University of Technology and Management, Parlakhemundi</span>
          <span className="location">Odisha, India</span>
        </div>
        <div className="education-row">
          <span className="degree">B.Tech in Electronics and Communication Engineering</span>
          <span className="year">2022 – 2026</span>
        </div>
      </motion.div>

  

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="education-row">
          <span className="institute">A.N.D College  </span>
          <span className="location"> Shahpur Patory , India</span>
        </div>
        <div className="education-row">
          <span className="degree">12th Grade</span>
          <span className="year">Intermediate – 73 %, May 2022</span>
        </div>
      </motion.div>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className="education-row">
          <span className="institute">St. Mary’s Public School </span>
          <span className="location"> Shahpur Patory India</span>
        </div>
        <div className="education-row">
          <span className="degree">10th Grade</span>
          <span className="year">High School – 78.2%, May 2020</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
