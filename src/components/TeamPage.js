import React from "react";
import TeamCard from "./TeamCard";
import "./styles/TeamPage.css";
import teamData from "../data/TeamData";

function TeamPage() {
  const { director, team } = teamData;

  return (
    <div className="team-page">
      <section className="director-section">
        <img
          src={director.image}
          alt={director.name}
          className="director-image"
        />
        <div className="director-content">
          <h2 className="director-title">DIRECTOR</h2>
          <h3 className="director-name">{director.name}</h3>
          <p className="director-role">{director.title}</p>
          <ul className="director-description">
            {director.description.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <p className="director-about">{director.about}</p>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-section-title">RESEARCH TEAM</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
              expertise={member.expertise}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TeamPage;