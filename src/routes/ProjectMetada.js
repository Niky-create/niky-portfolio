import React from 'react';
import './mainStyle.css';
import './projectStyle.css';
import TopButton from '../components/TopButton';
import BackButton from '../components/BackButton';

const ProjectMetada = () => {
  return (
    <div>
      <BackButton />
      <TopButton />
      <div className="container-blog">
        <div className="grid-container">
          <p>
            <h1>How we turned ideation into a game</h1>
          </p>
        
         
          <p>
             <strong>Completion:</strong> January 2023 <br />
             <strong>Client:</strong> VSE University<br />
             <strong>Team:</strong> Dariia Holotova, Anton Gorbenko, Matyáš Kohout, Nikola Dvořáková<br />
             <strong>My Role:</strong> UX Designer, Graphic Designer, Concept Creation, Desk Research, Quantitative Research<br />
          </p>
         
        </div>

      </div>
    </div>
  )
}

export default ProjectMetada;
