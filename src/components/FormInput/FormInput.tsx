import React from 'react';
import { IPropsInput } from './FormInput.type';

const FormInput: React.FC<IPropsInput> = ({
  label,
  name,
  type = 'text',
  validationSchema,
  required,
  register,
  errors,
}) => {
  return (
    <div className="cards-form__items" data-testid="form-input">
      <label className="cards-form__label" htmlFor={name}>
        {label}
        {required && '* '}
        {name !== 'file' ? (
          <input
            className="cards-form__input"
            id={name}
            type={type}
            {...register(name, validationSchema)}
          />
        ) : (
          <input
            className="cards-form__input"
            id={name}
            type={type}
            accept=".jpg, .jpeg, .png"
            {...register(name, validationSchema)}
          />
        )}
      </label>
      {errors && <div className="cards-form__error-message">{errors[name]?.message}</div>}
    </div>
  );
};

export default FormInput;
