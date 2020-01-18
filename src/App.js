import React, { Component } from "react";
import "./App.css";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Component/main";
import { Link } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration:'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration:'none', color: 'black'}} to="/">My Portfolio</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
