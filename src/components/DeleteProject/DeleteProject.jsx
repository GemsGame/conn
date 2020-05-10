import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './_delete-project.scss';
import Button from '../Button';
import { deleteProject, getProjects } from '../../actions/projects';

const DeleteProject = (props) => {
  const {
    close, uid, hash, deleteProject: del, getProjects: getProj,
  } = props;
  const delet = () => {
    close();
    del(uid, hash);
    getProj(uid);
  };
  return (
     <div className="row w30">
         <div className="col">
             <div className="card">
                 <div className="card-body text-center">
                     <h5>Удалить этот проект?</h5>
                     <p>Внимание! Восстановление невозможно</p>
                     <Button className="btn mr-3 btn-sm trash" onClick={delet}>Да, удалить</Button>
                     <Button className="btn btn-outline-primary-new btn-sm" onClick={close}>Нет</Button>
                 </div>
             </div>
         </div>
     </div>
  );
};

DeleteProject.propTypes = {

};

const mapDispatchToProps = {
  deleteProject,
  getProjects,
};
export default connect(() => {}, mapDispatchToProps)(DeleteProject);
