import React from "react";
import "./AboutMeCSS.css";
 import { motion } from "framer-motion";
import TechGlobe from "../TechGlobe/TechGlobe"


const AboutMe = () => {
  return (
    <>
      <div id="AboutMe" className="about-section">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1>
            <i className="fa-regular fa-user"></i> About Me
          </h1>
          <p>
            Hi, I'm <b style={{ color: '#4a90e2', fontSize: "1.2em" }}>Suraj Dev Kumar</b>.
            I'm a Passionate  about Embedded Systems and Cloud Technology Engineer with hands-on training
from Cranes Varsity. Proficient in microcontroller programming (LPC1768), sensor
interfacing, and real-time embedded applications. Skilled in Embedded C, Verilog HDL,
IoT, UART/I2C/SPI protocols, PWM, timers, and debugging techniques. Experienced in
automation, smart systems, and monitoring solutions. On the cloud side, experienced in
building and deploying real-time dashboards, IoT-based systems, and applications using
AWS, REST APIs, and GitHub.  
          </p>
        </motion.div>
             <TechGlobe />


 
      </div>
    </>
  );
};

export default AboutMe;
