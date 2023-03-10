import React from 'react';
import { IRadioSwitcher } from './RadioSwitcher.type';
import './RadioSwitcher.scss';
import { useAppDispatch } from 'store/hook';

const RadioSwitcher: React.FC<IRadioSwitcher> = ({
  label,
  name,
  values,
  option,
  setOption,
  isClick,
}) => {
  const dispatch = useAppDispatch();
  function onChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setOption(event.target.value));
    isClick();
  }
  return (
    <div className="switches__radio">
      <>
        <label className="switcher__label">{label}</label>
        <div className="switcher__btns">
          {values.map((item, i) => {
            return (
              <div className="radio-btn" key={item}>
                <input
                  type="radio"
                  value={item}
                  name={name}
                  id={`${item}${i}`}
                  checked={option == item ? true : false}
                  onChange={onChangeValue}
                />
                <label htmlFor={`${item}${i}`}>{item}</label>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default RadioSwitcher;
