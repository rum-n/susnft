import React, { useState } from "react";
// import ProjectCard from "../../components/projectCard/ProjectCard";
import './styles.css';
import projectData from '../../data/projectData.js';
import { SiDiscord, SiTwitter } from 'react-icons/si';
import { BsGlobe} from 'react-icons/bs';

export default function Homepage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(projectData);

  return (
    <React.Fragment>
      <div className='home-wrapper'>
          <div className="intro">
              <h1>No more NFT rug pulls!</h1>
              <h2>A community-driven database of suspicious NFT projects.<br/> Report a project so others can avoid getting scammed.</h2>
              {/* <h2>Seen a sus NFT project? Report so others can avoid getting scammed.</h2> */}
          </div>

          <div className="projects-wrapper">
            {data.map((card) => (
              <div className="project-card" key={card.projectTitle}>
                <img className="nft-img" src={card.imgUrl} alt={card.projectTitle}/>
                <div className="project-details">
                  <h3>{card.projectTitle}</h3>
                  <p><span>Concerns:</span><br/>{card.description}</p>
                  <p><span>Network:</span><br/>{card.blockchain}</p>
                  <p><span>Contract address:</span> {card.contractAddress}</p>
                  <div className="links">
                    <p><span>Links:</span></p>
                    <ul>
                      <li><a href={card.projectURL}><BsGlobe/></a></li>
                      <li><a href={card.twitter}><SiTwitter/></a></li>
                      <li><a href={card.discord}><SiDiscord/></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </React.Fragment>
  );
}