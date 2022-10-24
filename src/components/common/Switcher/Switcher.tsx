import React from 'react';
import './Switcher.scss';
import { ISwitcer } from './Switcher.type';

const Switcher: React.FC<ISwitcer> = ({ name, title, register }) => {
  return (
    <div className="cards-form__switcher">
      <span className="switcher__title">{title}</span>
      <div className="switcher__control">
        <input type="checkbox" {...register(name)} id="slide" data-testid="switcher" />
        <label htmlFor="slide"></label>
      </div>
    </div>
  );
};

export default Switcher;
