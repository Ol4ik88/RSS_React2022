import { ICard } from 'type/type';

export interface IPropsForm {
  addCard: (card: ICard) => void;
}

export interface IFormValues {
  name: string;
  birthday: string;
  file: FileList | null;
  kind: string;
  switcher: boolean;
  isAgree: boolean;
}
