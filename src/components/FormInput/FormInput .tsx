import React from 'react';
import { IFormInput } from './FormInput.type';

function FormInput(props: IFormInput) {
  return (
    <div className="cards-form__items" data-testid="form-input">
      {props.name !== 'file' ? (
        <label className="cards-form__label">
          {props.label}
          <input
            className="cards-form__input"
            ref={props.reference}
            type={props.type}
            name={props.name}
          />
        </label>
      ) : (
        <label className="cards-form__label-file">
          {props.label}
          <input
            className="cards-form__input-file"
            ref={props.reference}
            type={props.type}
            name={props.name}
            accept=".jpg, .jpeg, .png"
          />
        </label>
      )}
      <div className="cards-form__error-message">{props.isValid ? '' : props.errorMessage}</div>
    </div>
  );
}

export default FormInput;
