import React from 'react';
import './mainStyle.css';
import './aboutStyle.css';
import TopButton from "../components/TopButton";
import ProjectCard from "../components/ProjectCard";
import ProjectCardContent from "../components/ProjectCardContent";
import about from "../images/about.jpg";
const About = () => {
  return (
    <div>
      
      <div className="container-blog">
        <h1>Hi! My name is Nikola Dvořáková <img className="image-arch" src={about} /> and I design experiences
        </h1>
        <perex>
          <p>Does struggling to generate ideas mean someone lacks intelligence? We don't think so. Creativity is a skill that can be nurtured, trained, and supported with the right tools and environment. This belief inspired our card game, “Lorem Ipsum.”</p>
        </perex>
        
      <div class="cv-container">
        <div class="cv-section">
            <div class="year">2024</div>
            <div class="description">
                <h5>Senior UX Designer</h5>
                <p>Company XYZ</p>
                <p>Led a team of designers to create user-centered designs for the company's flagship product. Improved user satisfaction by 25% through innovative design solutions.</p>
            </div>
        </div>

        <div class="cv-section">
            <div class="year">2022</div>
            <div class="description">
                <h5>Senior UX Designer</h5>
                <p>Company ABC</p>
                <p>Collaborated with cross-functional teams to deliver designs that align with business goals. Focused on creating seamless user experiences across multiple platforms.</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
