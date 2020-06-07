import React from 'react';
import WidgetType from '../../components/WidgetType';
import WidgetColors from '../../components/WidgetColors';
import './_constructor.scss';
import WidgetView from '../../components/WidgetView';

const Constructor = () => (
  <>
  <div className='row mr-2 mt-4 ml-2 justify-content-end'>
  <div className="col">
      <h4>Конструктор</h4>
    </div>
    <div className="col-auto">
    </div>
  </div>
  <div className='row mr-2 ml-1 mt-3'>
  <div className="w100-col">
   <WidgetView/>
  </div>
  <div className="w-col">
  <WidgetType/>
  <WidgetColors/>
  </div>
 </div>
 </>
);
export default Constructor;
