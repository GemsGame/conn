import React from 'react';
import PropTypes from 'prop-types';
import './_project-item.scss';
import Button from '../Button';
import Portal from '../Portal';
import ModalWindow from '../ModalWindow';
import useModal from '../../hooks/useModal';
import DeleteProject from '../DeleteProject';


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
    isOpen={isOpen}
    closeW={close()}
    openW={open()}>
 <DeleteProject close={close()} hash={hash} uid={uid}/>
  </ModalWindow>
</Portal>
  <div className="col-sm-12 col-md-6 col-lg-4 pb-5">
    <div className="card">
      <div className="row"></div>
      <div class="card-header backgound-white">
        <div className="row">
          <div className="col"><h6>{projectName}</h6></div>
          <Button className="btn mr-3 btn-sm trash" onClick={open()}> <i class="far fa-trash-alt"></i></Button>
        </div>
      </div>
      <div className="card-body lines">
        <div className="card-body__items">
          <div className="row">
            <div className="col padding1rem"><i class="fas fa-link image-list-items"></i> {shortText(website, 15)}</div>
            <div className="col padding1rem"><i class="fas fa-stream image-list-items"></i>{template}</div>
            <div className="col padding1rem"><i class="far fa-clock image-list-items"></i> {timer}</div>
            <div className="col padding1rem"><i class="far fa-eye image-list-items"></i>{count}</div>
          </div>
        </div>
        <div className='code'>{code}</div>
      </div>
      <div className="row mb-2 mt-1">
        <div className="col text-center"><Button className="mr-3 mt-1 btn btn-outline-primary-new btn-sm"> <i class="fas fa-cogs button-image"></i>Настройки</Button><Button className="btn mt-1 btn-primary-new btn-sm"><i className="fas fa-code button-image"></i>Копировать код</Button></div>
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
