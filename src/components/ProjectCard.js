import { NavLink } from "react-router-dom";
import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className="cards_section">
      <div className="card-container">          
          <div className="link-item">
            <NavLink to={props.link} className="link-item">{props.type} - {props.title}</NavLink>
          </div>
        
          <NavLink to={props.link}><img src={props.imgsrc} alt="image" /></NavLink>
        </div>
    </div>
  )
};

export default ProjectCard;
