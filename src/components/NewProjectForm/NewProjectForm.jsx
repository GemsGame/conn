import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button';
import Input from '../Input/Input';
import Select from '../Select/Select';
import useForm from '../../hooks/useForm';
import validate from '../../services/validate';
import { addProject, getProjects } from '../../actions/projects';
import './_new-project-form.scss';

const NewProjectForm = ({ addProject: addProj, closeW, authentication, getProjects:getProj }) => {
  const {
    handleChange, handleSubmit, value, errors,
  } = useForm(submit, validate);

  function submit() {
    addProj(authentication.user.uid, { _values: value });
    getProj(authentication.user.uid);
    closeW();
  }
  return <div className="row w50">
   
    <div className="col mx-auto">
      <div className="card">
        <div className="row justify-content-end">
          <div className="col-auto"><Button onClick={closeW} className="btn btn-sm close-button"><i class="fas fa-times fa-lg"></i></Button></div>
        </div>

        <form className="card-body pt-0" onSubmit={handleSubmit} noValidate>
  
          <Input
            id="projectName"
            type="text"
            value={value.projectName}
            error={errors.projectName}
            label="Название проекта"
            className="form-control"
            classNameError="error-validation"
            classNameWrapper="form-group"
            onChange={handleChange} />
          <Input
            id="website"
            type="url"
            value={value.website}
            error={errors.website}
            label="Адрес сайта"
            className="form-control"
            classNameWrapper="form-group"
            onChange={handleChange} />
          <Select
            id="template"
            label="Шаблон PopUp окна"
            className="form-control"
            value={value.template}
            onChange={handleChange}
            classNameWrapper="form-group"
            options={[{ label: '_МОй_проект_супер', value: '_МОй_проект_супер' }]}
          />
          <div className="row">
            <div className="col">
              <Input
                id="timer"
                type="number"
                value={value.timer}
                error={errors.timer}
                label="Таймер в секундах"
                className="form-control"
                classNameWrapper="form-group"
                onChange={handleChange} />
            </div>
            <div className="col">
              <Select
                id="count"
                value={value.count}
                error={errors.count}
                label="Ограничение показов"
                className="form-control"
                defaultValue={{ label: 'До 1 показа на человека', value: 1 }}
                options={[{ label: 'До 1 показа на человека', value: 1 }, { label: 'До 2 показов на человека', value: 2 }, { label: 'До 3 показов на человека', value: 3 }, { label: 'До 5 показов на человека', value: 5 }]}
                classNameWrapper="form-group"
                onChange={handleChange} />
            </div>
          </div>
          <div className="row mt-3 justify-content-center">
            <Button type="submit" className="btn btn-primary-new"><i class="far fa-save button-image"></i>Cохранить</Button>
          </div>
        </form>
      </div>
    </div>
  </div>;
};

NewProjectForm.propTypes = {

};

const mapStateToProps = (state) => ({
  projects: state.projects,
  authentication: state.authentication,
});

const mapDispatchToProps = {
  addProject,
  getProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm);
