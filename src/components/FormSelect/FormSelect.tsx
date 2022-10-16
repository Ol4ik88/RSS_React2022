import React from 'react';
import { IFormSelect } from './FormSelect.type';

class FormSelect extends React.Component<IFormSelect> {
  render() {
    return (
      <div className="cards-form__items">
        <label className="cards-form__label">
          {this.props.label}
          <select className="cards-form__select" name={this.props.name} ref={this.props.reference}>
            {this.props.values.map((item, i) => {
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
}

export default FormSelect;
