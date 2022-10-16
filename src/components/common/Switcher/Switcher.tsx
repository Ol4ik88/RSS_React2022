import React from 'react';
import './Switcher.scss';
import { ISwitcer } from './Switcher.type';

class Switcher extends React.Component<ISwitcer> {
  render() {
    return (
      <div className="cards-form__switcher">
        <span className="switcher__title">{this.props.title}</span>
        <div className="switcher__control">
          <input
            type="checkbox"
            name={this.props.name}
            ref={this.props.reference}
            id="slide"
            data-testid="switcher"
          />
          <label htmlFor="slide"></label>
        </div>
      </div>
    );
  }
}

export default Switcher;
