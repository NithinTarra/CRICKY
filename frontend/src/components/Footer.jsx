import {
Camera,
Play,
Globe,
MessageCircle
} from "lucide-react";

import "./Footer.css";

function Footer() {
return ( <footer className="footer">

```
  <div className="footer-main">

    <div className="footer-brand">

      <a href="/" className="brand">
        <span className="brand-icon">C</span>
        CRICKY<span className="brand-dot">.</span>
      </a>

      <p>
        Every Ball. Every Run. Every Moment.
        Your destination for everything cricket.
      </p>

      <div className="social-links">

        <a href="#instagram" aria-label="Instagram">
          <Camera />
        </a>

        <a href="#youtube" aria-label="YouTube">
          <Play />
        </a>

        <a href="#website" aria-label="Website">
          <Globe />
        </a>

        <a href="#community" aria-label="Community">
          <MessageCircle />
        </a>

      </div>

    </div>

    <div className="footer-links">
      <h4>EXPLORE</h4>
      <a href="/">Home</a>
      <a href="/live">Live Scores</a>
      <a href="/schedule">Schedule</a>
      <a href="/series">Series</a>
    </div>

    <div className="footer-links">
      <h4>INFORMATION</h4>
      <a href="#about">About Us</a>
      <a href="#contact">Contact</a>
      <a href="#privacy">Privacy Policy</a>
      <a href="#terms">Terms & Conditions</a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 CRICKY. All rights reserved.</p>
    <p>Made for Cricket Lovers ❤️</p>
  </div>

</footer>


);
}

export default Footer;
