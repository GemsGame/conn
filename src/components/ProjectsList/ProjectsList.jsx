import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from '../ProjectItem';


const ProjectsList = ({ projects, uid }) => (
  Object.keys(projects).map((item, index) => <ProjectItem key={index} hash={item} uid={uid} item={projects[item]} />)
);

ProjectsList.propTypes = {

};
ProjectsList.defaultProps = {

};


export default ProjectsList;
