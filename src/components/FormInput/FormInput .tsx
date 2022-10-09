import React from 'react';
import { IFormInput } from 'type/type';

class FormInput extends React.Component<IFormInput> {
  render() {
    return (
      <div className="cards-form__items" data-testid="form-input">
        {this.props.name !== 'file' ? (
          <label className="cards-form__label">
            {this.props.label}
            <input
              className="cards-form__input"
              ref={this.props.reference}
              type={this.props.type}
              name={this.props.name}
            />
          </label>
        ) : (
          <label className="cards-form__label-file">
            {this.props.label}
            <input
              className="cards-form__input-file"
              ref={this.props.reference}
              type={this.props.type}
              name={this.props.name}
              accept=".jpg, .jpeg, .png"
            />
          </label>
        )}
        <div className="cards-form__error-message">
          {this.props.isValid ? '' : this.props.errorMessage}
        </div>
      </div>
    );
  }
}

export default FormInput;
