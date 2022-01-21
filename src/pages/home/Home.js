import React from "react";
// import ProjectCard from "../../components/projectCard/ProjectCard";
import './styles.css';

export default function Homepage() {

  return (
    <React.Fragment>
      <div className='home-wrapper'>
          <div className="intro">
              <h1>No more rug pulls!</h1>
              <h2>Seen a sus NFT project? Report so others can avoid getting scammed.</h2>
          </div>

          <div className="projects-wrapper">
              <div className="project-card">

              </div>
              <div className="project-card">

              </div>
              <div className="project-card">

              </div>
          </div>
      </div>
    </React.Fragment>
  );
}