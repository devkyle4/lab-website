import React from "react";
import "./styles/ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>
          Our facilities are located at the Skempton Building, in the South
          Kensington campus of Imperial College London.
        </p>
        <p>Our full address is:</p>
        <address>
          Skempton Building
          <br />
          Imperial College London
          <br />
          SW7 2BU, London
        </address>
        <div className="contact-buttons">
          <a
            href="mailto:p.angeloudis@imperial.ac.uk"
            className="contact-button email-button"
          >
            <i className="fas fa-envelope"></i> p.angeloudis@imperial.ac.uk
          </a>
          <a
            href="https://goo.gl/maps/imperial"
            className="contact-button address-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-map-marker-alt"></i> Address
          </a>
        </div>
      </div>
      <div className="contact-images">
        <div className="contact-image-card">
          <img
            src="/images/skempton-building.jpg"
            alt="Skempton Building"
            className="contact-image"
          />
          <p className="contact-image-caption">Skempton Building</p>
        </div>
        <div className="contact-image-card">
          <img
            src="/images/south-kensington.jpg"
            alt="South Kensington Campus"
            className="contact-image"
          />
          <p className="contact-image-caption">South Kensington Campus</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
