import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="mailto:example@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p>© 2024 Human Computer Interactions & Pervasive Technologies Laboratory</p>
        <p className="footer-logo">HCI Lab</p>
      </div>
    </footer>
  );
}

export default Footer;
