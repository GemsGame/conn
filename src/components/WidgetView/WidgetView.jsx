import React from 'react';
import PropTypes from 'prop-types';
import './_widget-view.scss';

const WidgetView = ({ widgetType = 'type1', bColor = 'white', tColor = 'black', mWidth = '700px', mHeight = '300px'}) => {
  const widgetStyle = {
    maxWidth: mWidth,
    minHeight: mHeight,
    height: '100%',
    width: '100%',
    color: tColor,
    backgroundColor: bColor,
    borderRadius: '10px',
    margin: '10px',
    padding: '20px',
    border: '2px solid rgba(0, 0, 0, 0.05)',
  };
  let content;
  if (widgetType === 'type1') {
    content = <div style={widgetStyle}>111</div>;
  }
  if (widgetType === 'type2') {
    content = <div style={widgetStyle}>2</div>;
  }
  return <div className="widget-view">
       <div className="widget-window">
       {content}
       </div>
    </div>;
};

WidgetView.propTypes = {

};

export default WidgetView;
