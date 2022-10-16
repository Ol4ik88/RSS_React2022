import React from 'react';
import { IButton } from './Button.type';

class Button extends React.Component<IButton> {
  render() {
    return (
      <button
        className={`button ${this.props.classes}`}
        type={this.props.type}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
