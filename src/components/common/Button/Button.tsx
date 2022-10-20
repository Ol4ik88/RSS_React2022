import React from 'react';
import { IButton } from './Button.type';

function Button(props: IButton) {
  return (
    <button
      className={`button ${props.classes}`}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
