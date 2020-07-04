import React from 'react';
import baseStyles from './NeumorphicContainer.module.css';

const NeumorphicContainer = ({ children }) => {
  return (
    <div className={baseStyles.container} >
      { children }
    </div>
  )
}

export default NeumorphicContainer;
