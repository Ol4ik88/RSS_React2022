import React from 'react';
import { IFormSelect } from './FormSelect.type';

const FormSelect: React.FC<IFormSelect> = ({ label, name, values, register }) => {
  return (
    <div className="cards-form__items">
      <label className="cards-form__label">
        {label}
        <select className="cards-form__select" {...register(name)}>
          {values.map((item, i) => {
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
};

export default FormSelect;
