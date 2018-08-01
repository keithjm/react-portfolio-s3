import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar.js";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact";
import "./projects";
import projects from "./projects";
const ProjectsPage = () => {
  return <Projects projectObject={projects} />;
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={ProjectsPage} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
