import React from "react";

function NewsInfo() {
  return (
    <div className="page">
      <p>
        Join us in our upcoming hackathon to showcase your skills, learn new
        things, and network with like-minded people.
      </p>
      <h2>Hackathon Information</h2>

      <p>
        <strong>Date:</strong> December 15-16, 2024
      </p>
      <p>
        <strong>Venue:</strong> HCI Lab, University of Ghana
      </p>
      <p>
        <strong>Dataset:</strong>{" "}
        <a
          href="/path-to-your-dataset/dataset-file.csv"
          download
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          Download Akan Dataset
        </a>
      </p>
      <p>
        <strong>About:</strong>
        This hackathon challenges participants to use geospatial data to propose
        innovative solutions for smarter cities.
      </p>
      <p>
        <strong>Prizes:</strong>
      </p>
      <ul>
        <li>Winner: $2000 + Certificate</li>
        <li>1st Runner-Up: $1000 + Certificate</li>
        <li>2nd Runner-Up: $500 + Certificate</li>
      </ul>
    </div>
  );
}

export default NewsInfo;
