import React from 'react';
import './Switcher.scss';
import { ISwitcer } from './Switcher.type';

function Switcher(props: ISwitcer) {
  return (
    <div className="cards-form__switcher">
      <span className="switcher__title">{props.title}</span>
      <div className="switcher__control">
        <input
          type="checkbox"
          name={props.name}
          ref={props.reference}
          id="slide"
          data-testid="switcher"
        />
        <label htmlFor="slide"></label>
      </div>
    </div>
  );
}

export default Switcher;
