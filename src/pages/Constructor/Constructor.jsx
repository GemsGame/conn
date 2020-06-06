import React from 'react';
import WidgetType from '../../components/WidgetType';
import WidgetColors from '../../components/WidgetColors';

const Constructor = () => (
  <>
  <div className='row mr-2 mt-4 ml-2 justify-content-end'>
  <div className="col">
      <h4>Конструктор</h4>
    </div>
    <div className="col-auto">
    </div>
  </div>
  <div className='row mr-2 ml-2 mt-3'>
    <WidgetColors/>
  <WidgetType/>
 </div>
 </>
);
export default Constructor;
