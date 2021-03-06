import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fade-page-animation">
      <footer>
        <div
          className="centering"
          style={{ paddingTop: 80, paddingBottom: 80 }}
        >
          <div id="footer-flex-container">
            <div className="footer-logo footer-flex-item">
              <Link
                to="/work"
                onClick={() => window.scrollTo(0, 0)}
                id="logo-footer"
              >
                Kade Zaccaro&trade;
              </Link>
              <p className="in-short">
                Designer &amp; coder passionate about well-designed experiences
                with close attention to detail. Always learning.
              </p>
            </div>

            <div className="footer-nav-links footer-flex-item">
              <ul>
                <li className="spacer-line"></li>

                <li>
                  <Link to="/work" onClick={() => window.scrollTo(0, 0)}>
                    Work
                  </Link>
                </li>
                <li className="spacer-line"></li>

                <li>
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                    About
                  </Link>
                </li>
                <li className="spacer-line"></li>

                <li>
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    Contact
                  </Link>
                </li>
                <li className="spacer-line"></li>
              </ul>
            </div>

            <div className="social footer-flex-item">
              <ul>
                <li className="spacer-line"></li>

                <li className="social-icon">
                  <a
                    className="align-icon"
                    href="https://github.com/kadezaccaro"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/icons/github.svg"
                      alt="GitHub"
                      className="filter-white"
                    />
                    GitHub
                  </a>
                </li>
                <li className="spacer-line"></li>

                <li className="social-icon">
                  <a
                    className="align-icon"
                    href="https://www.instagram.com/ktype.xyz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/icons/instagram.svg"
                      alt="Instagram"
                      className="filter-white"
                    />
                    Instagram
                  </a>
                </li>
                <li className="spacer-line"></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-dark-fade">
          <div className="centering" style={{ padding: 32 }}>
            <p style={{ marginTop: 0, textAlign: "center" }}>
              Kade Zaccaro &copy; 2022
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
