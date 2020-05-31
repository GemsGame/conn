import React from 'react';
import PropTypes from 'prop-types';
import './_project-item.scss';
import Button from '../Button';
import Portal from '../Portal';
import ModalWindow from '../ModalWindow';
import useModal from '../../hooks/useModal';
import DeleteProject from '../DeleteProject';
import EditProject from '../EditProject';


const code = `<!---- connector.pw технология прямого соединения---->
<script>
  (async function() {
    config = {
      user_id: "l1oxQqv76odvWBM3t4SshYjMDkq1",
      timeout: 3,
      project_name: "noname",
      background: { red: 83, green: 109, blue: 254 },
      title: "Вам звонит консультант!",
      text:
        "Менеджер Виктория хочет сделать Вам лучшее предложение на рынке Беларуси",
      callCount: 1,
      template: 0
    };
    const root = document.createElement("div");
    root.id = "root-connector";
    const ins = document.body.insertBefore(root, document.body.firstChild);

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connector.pw/dist/bundle.js";
    const before = document.getElementsByTagName('script')[0];
    before.parentNode.insertBefore(script, before);
  })();
</script>)
<!---звони посетителям сайта, пока этого не делают твои конкуренты---->`;

const ProjectItem = ({ item, hash, uid }) => {
  const { isOpen, close, open } = useModal();

  const shortText = (text, lenght) => {
    if (text.length > lenght) {
      return `${text.slice(0, lenght)}...`;
    } return text;
  };
  const {
    count, projectName, template, timer, website,
  } = item._values;
  return (
    <>
      <Portal>
        <ModalWindow
          isOpen={isOpen.deleteProject}
          closeW={close('deleteProject')}
          openW={open('deleteProject')}>
          <DeleteProject close={close('deleteProject')} hash={hash} uid={uid} />
        </ModalWindow>
      </Portal>
      <Portal>
        <ModalWindow
          isOpen={isOpen.editProject}
          closeW={close('editProject')}
          openW={open('editProject')}>
          <EditProject close={close('editProject')} hash={hash} uid={uid} item={item._values} />
        </ModalWindow>
      </Portal>

      <div className="col-sm-12 col-md-6 col-lg-4 pb-5">
        <div className="card">
          <div className="row"></div>
          <div className="card-header backgound-white">
            <div className="row">
              <div className="col project-header"><h6>{projectName}</h6></div>
              <Button className="btn mr-3 btn-sm trash" onClick={open('deleteProject')}> <i className="far fa-trash-alt"></i></Button>
            </div>
          </div>
          <div className="card-body lines">
            <div className="card-body__items">
              <div className="row">
                <div className="col padding1rem"><i className="fas fa-link image-list-items"></i> {shortText(website, 15)}</div>
                <div className="col padding1rem"><i className="fas fa-stream image-list-items"></i>{template}</div>
                <div className="col padding1rem"><i className="far fa-clock image-list-items"></i> {timer}</div>
                <div className="col padding1rem"><i className="far fa-eye image-list-items"></i>{count}</div>
              </div>
            </div>
            <div className='code'>{code}</div>
          </div>
          <div className="button-block">
         <Button className="mr-3 mt-1 btn btn-outline-primary-new btn-sm" onClick={open('editProject')}> <i className="fas fa-cogs button-image"></i>Настройки</Button><Button className="btn mt-1 btn-primary-new btn-sm"><i className="fas fa-code button-image"></i>Копировать код</Button>
          </div>
        </div>
      </div>
    </>);
};

ProjectItem.propTypes = {

};

ProjectItem.defaultProps = {
  count: '0',
  website: 'yandex.ru',
  projectName: 'тестовый проект',
  template: 'default',
  timer: '30',
};
export default ProjectItem;
