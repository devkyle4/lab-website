import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import NewsInfo from "./components/NewsInfo";
import Footer from "./components/Footer";
import Team from "./components/Team";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";
import Publication from "./components/Publication";
import "./App.css";

function Navbar() {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <nav
      className={
        isHomepage? "navbar homepage-navbar" : "navbar non-home-navbar"
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
          <Link to="/news-info">News</Link>
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
            <Route path="/team" element={<Team />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/news-info" element={<NewsInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
