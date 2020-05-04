import React, { useState } from 'react';
import ProjectsList from '../ProjectsList';
import ModalWindow from '../ModalWindow';
import NewProjectForm from '../NewProjectForm/NewProjectForm';

const ProjectsContainer = (props) => {
  const [modalWindow, setModalWindow] = useState();
  let insertWindow;
  const addNewProject = (name) => {
    setModalWindow(name);
  };
  if (modalWindow === 'newProject') {
    insertWindow = <ModalWindow><NewProjectForm/></ModalWindow>;
  }
  if (modalWindow === 'editProject') {
    insertWindow = <ModalWindow>edit</ModalWindow>;
  }
  return (
    <>
      {insertWindow}
      <div className='row mt-5 mr-2 ml-2'>
        <ProjectsList />
      </div>
      <div className='row mr-2 mt-3 ml-2 justify-content-end'>
        <div className="col-auto">
          <button type="button" class="btn btn-primary-new" onClick={() => addNewProject('newProject')}>Добавить проект</button>
        </div>
      </div>
    </>);
};
export default ProjectsContainer;
