import { ICard, ICharacter } from 'type/type';
import { IFormValues } from 'components/Form/Form.type';

export interface FormState {
  cards: ICard[];
  formValues: IFormValues;
}

export interface HomeState {
  cards: ICharacter[];
  textSearch: string;
  limit: string;
  sorting: string;
  currentPage: number;
  pageCount: number;
  totalElements: number;
}

export interface IPagination {
  currentPage: number;
  pageCount: number;
  totalElements: number;
}
