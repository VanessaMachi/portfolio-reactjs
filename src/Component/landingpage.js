import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/supportmale-512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Software Engineer</h1>
              <hr />
              <p>HTML/CSS | Python | React | MongoDB </p>
              <div className="social-links">
                {/* Linkedin */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
                {/* Free */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
        <h1>Landing Page</h1>
      </div>
    );
  }
}

export default LandingPage;
