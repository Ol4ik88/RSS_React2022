export interface IRadioSwitcher {
  label: string;
  name: string;
  values: string[];
  option: string;
  setOption: (text: string) => void;
  isClick: () => void;
}
