import React from "react";
import "./SkillsCSS.css";
import { motion } from "framer-motion";
const skillsData = [
  {
    icon: "fa-solid fa-microchip",
    title: "Programming & HDL",
    description: "Embedded C, C, C++, Verilog",
  },
  {
    icon: "fa-solid fa-cogs",
    title: "Microcontrollers & Tools",
    description: "LPC1768, ARM7, Keil µVision, Proteus",
  },
  {
    icon: "fa-solid fa-network-wired",
    title: "Communication Protocols",
    description: "UART, I2C, SPI",
  },
  {
    icon: "fa-solid fa-stopwatch",
    title: "Embedded Peripherals",
    description: "Timers, PWM, LCD, Keypad, Servo Motor, ADC",
  },
  {
    icon: "fa-solid fa-robot",
    title: "Hardware & Sensor Interfacing",
    description: "IR Sensor, Buzzer, Motor Control, Sensor Interfacing",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Application Development",
    description: "Embedded Application Development, Real-Time Applications",
  },
  {
    icon: "fa-solid fa-bug-slash",
    title: "Problem Solving & Debugging",
    description: "Debugging Embedded Systems and Optimizing Performance",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Simulation & Modeling",
    description: "MATLAB Simulink",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "spring",
    },
  },
};

const Skills = () => {
  return (
    <div id="Skills" className="skills-section">
      <h2>
        <i className="fa fa-cogs" aria-hidden="true"></i> Skills
      </h2>

      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
      >
        {skillsData.map((skill, i) => (
          <motion.div className="skill-item" variants={itemVariants} key={i}>
            <i className={`${skill.icon} skill-icon`}></i>
            <div className="skill-content">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
