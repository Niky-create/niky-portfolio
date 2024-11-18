import React from 'react';
import './mainStyle.css';
import './projectStyle.css';
import TopButton from '../components/TopButton';
import BackButton from '../components/BackButton';
import graf from "../images/LoremIpsum/LoremIpsum_graph.png";
import prototype1 from "../images/LoremIpsum/koncept1.png";
import prototype2 from "../images/LoremIpsum/koncept2.png";
import prototype3 from "../images/LoremIpsum/koncept3.png";
import prototype4 from "../images/LoremIpsum/koncept4.png";
import mockup1 from "../images/LoremIpsum/mockup_1.png";
import mockup2 from "../images/LoremIpsum/mockup_2.png";
import student from "../images/LoremIpsum/student.png";
import manager from "../images/LoremIpsum/manager.png";

const ProjectLoremIpsum = () => {
  return (
    <div>
      <BackButton />
      <TopButton />
      <div className="container-blog">
        <div className="container-text-section">
        <div className="grid-container-title">
          <p>
            <h1>How we turned ideation into a game</h1>
          </p>
          <p>
            <blockquote>
            "Creativity is intelligence having fun." <br /> - Albert Einstein
          </blockquote>
          Does struggling to generate ideas mean someone lacks intelligence? We don't think so. Creativity is a skill that can be nurtured, trained, and supported with the right tools and environment. This belief inspired our card game, “Lorem Ipsum.”</p>

          <p>
             <strong>Completion:</strong> January 2023 <br />
             <strong>Client:</strong> VSE University<br />
             <strong>Team:</strong> Dariia Holotova, Anton Gorbenko, Matyáš Kohout, Nikola Dvořáková<br />
             <strong>My Role:</strong> UX Designer, Graphic Designer, Concept Creation, Desk Research, Quantitative Research<br />
          </p>
          </div>
        </div>

       <div className="container-text-section">
        <h3>Why "Lorem Ipsum"?</h3>
        <div className="grid-container">
          <p>Every project starts with meaningless placeholder text—"Lorem Ipsum." Our goal is to replace this with creative and meaningful ideas through our game.</p>
          <p>Every project starts with meaningless placeholder text—"Lorem Ipsum." Our goal is to replace this with creative and meaningful ideas through our game.</p>
          <p>Every project starts with meaningless placeholder text—"Lorem Ipsum." Our goal is to replace this with creative and meaningful ideas through our game.</p>
          
        </div>
        </div>

        <h3>The Challenge</h3>
        <div className="grid-container">
          <p><strong>Assignment:</strong> Our task was to make ideation methods more accessible by applying the SIT (Systematic Inventive Thinking) approach along with creative techniques proposed by our instructors.</p>
          <p><strong>Target Group:</strong> Professionals in communication and marketing, as well as university students studying creative communication.</p>
        </div>

        <h3>Process Overview</h3>
        
        <h4>1. Empathize</h4>
        <div className="grid-container">
          <p>We began with secondary and then primary research to identify where ideation struggles most. We conducted interviews with three professionals—a CEO, an Event Manager, and a Graphic Designer—who often rely on traditional brainstorming...</p>
          <div className="image-block-row">
            <img className="row-image" src={manager} alt="Manager" />
            <img className="row-image" src={student} alt="Student" />
          </div>
        </div>

        <h4>2. Define</h4>
        <div className="grid-container">
          <p>From our research, we distilled two main challenges:</p>
          <ul>
            <li><strong>Professionals:</strong> How can we encourage established professionals to adopt a more effective ideation approach like SIT?</li>
            <li><strong>Students:</strong> How can we help students overcome the initial barrier of starting the ideation process?</li>
          </ul>
        </div>

        <h4>3. Ideate</h4>
        <div className="grid-container">
          <p>We explored various creative tools, ranging from apps like Miro to physical card games...</p>
        </div>

        <h4>4. Prototype</h4>
        <div className="grid-container">
          <p>We created several designs for the card game, ultimately choosing a dark theme...</p>
        </div>

        <h4>5. Test</h4>
        <div className="grid-container">
          <p>We tested our prototypes with four groups of students...</p>
        </div>

        <img alt="Graph" className="column-image" src={graf} />

        <h5>Results:</h5>
        <div className="grid-container">
          <ul>
            <li><strong>90%</strong> of participants with the prototype reported...</li>
            <li><strong>100%</strong> of participants with Prototype A reported:</li>
          </ul>
        </div>

        <p>The game proved effective in making ideation more approachable...</p>

        <div className="image-block-column">
          <img className="column-image" src={mockup1} alt="Mockup 1" />
          <img className="column-image" src={mockup2} alt="Mockup 2" />
        </div>
      </div>
    </div>
  )
}

export default ProjectLoremIpsum;
