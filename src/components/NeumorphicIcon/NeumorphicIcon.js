import React from 'react';
import styles from './NeumorphicIcon.module.css';

const NeumorphicIcon = (props) => {
  return (
    <span>
      <a target="__blank" href={props.linkUrl}>
        <img
          src={props.imgSrc}
          alt={props.altText}
        />
      </a>
    </span>
  )
}

export default NeumorphicIcon
