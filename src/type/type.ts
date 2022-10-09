export interface ICard {
  id?: number;
  title?: string;
  img: string | null;
  description?: string;
  name?: string;
  birthday?: string;
  kind?: string;
  sex?: string;
  isAgree?: boolean;
}
export interface ICardItem {
  card: ICard;
}
export interface IStateCards {
  cards: ICard[];
}

export type PropsComponent = Record<string, unknown>;

export interface IFilterSearch {
  filter: (text: string) => void;
}

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

export interface IFormInput {
  label: string;
  name: string;
  type: string;
  isValid: boolean;
  image?: string | null;
  errorMessage: string;
  reference: React.RefObject<HTMLInputElement>;
}

export interface IFormSelect {
  label: string;
  name: string;
  values: string[];
  reference: React.RefObject<HTMLSelectElement>;
}

export interface ISwitcer {
  name: string;
  title: string;
  reference: React.RefObject<HTMLInputElement>;
}

export interface IButton {
  classes?: string;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
  onClick?: () => void;
  text: string;
}
