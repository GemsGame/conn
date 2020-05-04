import React from 'react';
import PropTypes from 'prop-types';

const NewProjectForm = (props) => (
    <form className="col-sm-12 col-md-6 col-lg-6 mx-auto">
    <div className="card">
        <div className="card-body">
    <div class="form-group">
      <label for="exampleInputEmail1">Название проекта</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Адрес сайта</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="form-group">
    <label for="exampleFormControlSelect1">Шаблон окна звонка</label>

    <select class="form-control" id="exampleFormControlSelect1">
      <option>default</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <small id="exampleFormControlSelect1" class="form-text text-muted">Создать шаблон можно в "Конструторе"</small>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Таймер звонка</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <small id="exampleFormControlSelect1" class="form-text text-muted">Через X секунд после захода на сайт, система позвонит посетителю</small>
  </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </div>
  </form>
  
);

NewProjectForm.propTypes = {

};

export default NewProjectForm;
