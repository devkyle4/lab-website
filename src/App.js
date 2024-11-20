import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import EventsPage from "./components/EventsPage";
import Footer from "./components/Footer";
import TeamPage from "./components/TeamPage";
import JoinUs from "./components/JoinUs";
import Contact from "./components/ContactPage";
import Publication from "./components/Publication";
import "./App.css";
import ContactPage from "./components/ContactPage";

function Navbar() {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <nav
      className={
        isHomepage ? "navbar homepage-navbar" : "navbar non-home-navbar"
      }
    >
      {!isHomepage && (
        <div className="navbar-branding">
          <img src="/hci.png" alt="Lab Logo" className="navbar-logo" />
          <div className="navbar-text">
            <h1>HCI & Pervasive Technologies Laboratory</h1>
            <h2 className="university">University of Ghana</h2>
          </div>
        </div>
      )}
      {isHomepage && (
        <div className="logo-container">
          <img
            src="/hci.png"
            alt="HCI Lab Logo"
            className="navbar-logo"
          />
          <p className="lab-name">HCI & Pervasive Technologies Lab</p>
        </div>
      )}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/join-us">Join Us</Link>
        </li>
        <li>
          <Link to="/publications">Publications</Link>
        </li>
        <li>
          <Link to="/events-info"> Events</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
     
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/events-info" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
