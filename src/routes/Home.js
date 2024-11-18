import React from 'react';
import './mainStyle.css';
import TopButton from "../components/TopButton";
import ProjectCard from "../components/ProjectCard";
import ProjectCardContent from "../components/ProjectCardContent";

const Home = () => {
  return (
    <div>
      <TopButton />
      <div className="container-main">
        <div className="header-section">
          <div className="links-container">
            <a href=".index.js" className="link-item">Nikola Dvořáková</a>
            <a href="https://www.linkedin.com/in/nikola-dvo%C5%99%C3%A1kov%C3%A1-238569268/" className="link-item" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/dvorakova_niky/" className="link-item" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="grid-container">
          {ProjectCardContent.map((val, ind) => (
            <div className="project-section" key={ind}>
              <ProjectCard
                imgsrc={val.imgsrc}
                title={val.title}
                type={val.type}
                link={val.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
