import React from "react";
import "./styles/EventsCard.css";

function EventsCard({
  title,
  date,
  venue,
  description,
  image,
  file,
  rules,
  prizes,
}) {
  return (
    <div className="events-card">
      <img src={image} alt={title} className="events-card-image" />
      <div className="events-card-content">
        <h3 className="events-card-title">{title}</h3>
        <p>{description}</p>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Venue:</strong> {venue}
        </p>
        <div className="events-card-grid">
          {rules && (
            <div className="events-card-rules">
              <h4>Rules:</h4>
              <ul>
                {rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          )}
          {prizes && (
            <div className="events-card-prizes">
              <h4>Prizes:</h4>
              <ul>
                {prizes.map((prize, index) => (
                  <li key={index}>
                    <strong>{prize.position}:</strong> {prize.prize}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {file && (
            <div className="events-card-dataset">
              <h4>Dataset:</h4>
              <p>
                <a
                  href={file}
                  download
                  style={{ color: "#007bff", textDecoration: "none" }}
                >
                  Download Dataset
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
