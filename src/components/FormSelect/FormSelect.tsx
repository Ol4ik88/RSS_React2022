import React from 'react';
import { IFormSelect } from './FormSelect.type';

function FormSelect(props: IFormSelect) {
  return (
    <div className="cards-form__items">
      <label className="cards-form__label">
        {props.label}
        <select className="cards-form__select" name={props.name} ref={props.reference}>
          {props.values.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}

export default FormSelect;
