import React from "react";
import { motion } from "framer-motion";
import "./certificate.css";
import geeksforgeeks from "../../images/certificate/1.png";
import java from "../../images/certificate/2.png"
import AI from "../../images/certificate/3.png"
import machine_learning from "../../images/certificate/4.png"
import sql from "../../images/certificate/5.png"


const certificates = [
  {
    title: "Volunteer Award ",
    image: java,
    link: java,
  },
  {
    title: "Precision Agriculture ",
    image: geeksforgeeks,
    link: geeksforgeeks,
  },
  // Add more certificates here...
   {
    title: "Full custom IC design using CADENCE tool",
    image: AI,
    link: AI,
  },
  {
    title: "Cranes varsity certificate",
    image: machine_learning,
    link: machine_learning,
  }, {
    title: "maven Silicon",
    image: sql,
    link: sql,
  },
];

const Certificate = () => {
  return (
    <section className="certificate-section">
      <motion.h2
        className="certificate-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🏆 My Certificates
      </motion.h2>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="certificate-card"
            whileHover={{ scale: 1.05 }}
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img src={cert.image} alt={cert.title} />
              <p>{cert.title}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
