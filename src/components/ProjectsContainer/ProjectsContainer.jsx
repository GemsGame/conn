import React, { useState } from 'react';
import ProjectsList from '../ProjectsList';
import ModalWindow from '../ModalWindow';
import NewProjectForm from '../NewProjectForm/NewProjectForm';
import Portal from '../Portal';


const ProjectsContainer = (props) => {
  const [isOpen, setIsOpen] = useState({ addProject: false, editProject: false });

  const open = (e) => () => {
    setIsOpen({ ...isOpen, [e]: true });
  };
  const close = (e) => () => {
    setIsOpen({ ...isOpen, [e]: false });
  };
  return (
    <>
      <Portal>
        <ModalWindow
          isOpen={isOpen.addProject}
          closeW={close('addProject')}
          openW={open('addProject')}>
          <NewProjectForm />
        </ModalWindow>
      </Portal>
      <div className='row mt-5 mr-2 ml-2'>
        <ProjectsList />
      </div>
      <div className='row mr-2 mt-3 ml-2 justify-content-end'>
        <div className="col-auto">
          <button type="button" class="btn btn-primary-new" onClick={open('addProject')}>Добавить проект</button>
        </div>
      </div>
    </>);
};
export default ProjectsContainer;
