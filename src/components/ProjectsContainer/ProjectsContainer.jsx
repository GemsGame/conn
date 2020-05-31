import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ProjectsList from '../ProjectsList';
import ModalWindow from '../ModalWindow';
import NewProjectForm from '../NewProjectForm/NewProjectForm';
import Portal from '../Portal';
import { getProjects } from '../../actions/projects';
import useModal from '../../hooks/useModal';

const ProjectsContainer = ({ getProjects: getProj, authentication, projects }) => {
  const { open, close, isOpen } = useModal();

  useEffect(() => {
    getProj(authentication.user.uid);
  }, []);
  let pr;
  if (projects) {
    pr = <ProjectsList projects={projects} uid={authentication.user.uid} />;
  } else pr = <small className="text-muted ml-3">Пока ничего нет :(</small>;
  return (
    <>
      <Portal>
        <ModalWindow
          isOpen={isOpen.addProject}
          closeW={close('addProject')}
          openW={open('addProject')}>
          <NewProjectForm closeW={close('addProject')}/>
        </ModalWindow>
      </Portal>
      <div className='row mr-2 mt-4 ml-2 justify-content-end'>
      <div className="col">
          <h4>Проекты</h4>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary-new" onClick={open('addProject')}>Добавить проект</button>
        </div>
      </div>
      <div className='row mr-2 ml-2 mt-3'>
    {pr}
     </div>
    </>);
};

const mapStateToProps = (state) => ({
  projects: state.projects,
  authentication: state.authentication,
});

const mapDispatchToProps = {
  getProjects,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
