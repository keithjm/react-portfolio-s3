import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/projects.css";
import { Row } from "react-bootstrap";
import Wrapper from "./Wrapper";

const Projects = props => (
  <Wrapper>
    <div className="projects">
      {bootStrapRow(props)}
      {/* {props.projectObject.map(project => <ProjectCard projectData={project} />)} */}
    </div>
  </Wrapper>
);

let bootStrapRow = item => {
  let x = 0;
  let rows = [];
  let columns = [];

  item.projectObject.map(project => {
    if (x === 0) {
      columns.push(<ProjectCard projectData={project} />);
      x++;
    } else if (x === 3) {
      columns.push(<ProjectCard projectData={project} />);
      rows.push(<Row> {columns} </Row>);
      x = 0;
      columns = [];
    } else {
      columns.push(<ProjectCard projectData={project} />);
      x++;
    }
    return 1;
  });

  if (x < 3) {
    rows.push(<Row> {columns} </Row>);
  }
  return rows;
};

export default Projects;
