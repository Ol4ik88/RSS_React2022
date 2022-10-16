import { ICard } from 'type/type';

export interface IPropsForm {
  addCard: (card: ICard) => void;
}

export type ElementKeys = 'name' | 'birthday' | 'kind' | 'file' | 'isAgree';

export interface IStateForm {
  buttonsDisable: boolean;
  name: boolean;
  birthday: boolean;
  kind: boolean;
  img: string | null;
  file: boolean;
  isAgree: boolean;
  isValid: boolean;
}
