import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface IRadioSwitcher {
  label: string;
  name: string;
  values: string[];
  option: string;
  setOption: ActionCreatorWithPayload<string, string>;
  isClick: () => void;
}
