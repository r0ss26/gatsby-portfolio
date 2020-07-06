import React from 'react';
import baseStyles from './NeumorphicContainer.module.css';

const NeumorphicContainer = ({ centered, children }) => {
  return (
    <div className={baseStyles.container} >
      { children }
    </div>
  )
}

export default NeumorphicContainer;
