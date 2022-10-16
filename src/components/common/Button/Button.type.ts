export interface IButton {
  classes?: string;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
  onClick?: () => void;
  text: string;
}
