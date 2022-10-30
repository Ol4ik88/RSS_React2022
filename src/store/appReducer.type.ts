import { IFormValues } from 'components/Form/Form.type';
import { ICard, ICharacter } from 'type/type';

export interface GlobalContent {
  homeData: {
    cards: ICharacter[];
    textSearch: string;
    limit: string;
    sorting: string;
    paginationOptioons: {
      currentPage: number;
      pageCount: number;
      totalElements: number;
    };
  };
  formData: {
    cards: ICard[];
    formValues: IFormValues;
  };
}

export interface IAppContext extends GlobalContent {
  saveHomeSearch: (text: string) => void;
  saveHomePagination: (current: number, pages: number, total: number) => void;
  saveHomeLimit: (limit: string) => void;
  saveHomeSort: (sorting: string) => void;
  saveHomeResult: (cards: ICharacter[]) => void;
  saveFormData: (formValues: IFormValues) => void;
  saveFormResult: (cards: ICard[]) => void;
}

export enum ActionKind {
  SAVE_HOME_SEARCH = 'SAVE_HOME_SEARCH',
  SAVE_HOME_PAGINATION = 'SAVE_HOME_PAGINATION',
  SAVE_HOME_LIMIT = 'SAVE_HOME_LIMIT',
  SAVE_HOME_SORTING = 'SAVE_HOME_SORTING',
  SAVE_HOME_RESULT = 'SAVE_HOME_RESULT',
  SAVE_FORM_DATA = 'SAVE_FORM_DATA',
  SAVE_FORM_RESULT = 'SAVE_FORM_RESULT',
}

type SearchHomeAction = {
  type: ActionKind.SAVE_HOME_SEARCH;
  payload: { textSearch: string };
};
type PaginationHomeAction = {
  type: ActionKind.SAVE_HOME_PAGINATION;
  payload: { page: number; pages: number; total: number };
};
type LimitHomeAction = {
  type: ActionKind.SAVE_HOME_LIMIT;
  payload: { limit: string };
};
type SortingHomeAction = {
  type: ActionKind.SAVE_HOME_SORTING;
  payload: { sorting: string };
};
type HomeCardsAction = {
  type: ActionKind.SAVE_HOME_RESULT;
  payload: { cards: ICharacter[] };
};
type FormFieldsAction = {
  type: ActionKind.SAVE_FORM_DATA;
  payload: { formValues: IFormValues };
};
type FormCardsAction = {
  type: ActionKind.SAVE_FORM_RESULT;
  payload: { cards: ICard[] };
};

export type AppAction =
  | SearchHomeAction
  | PaginationHomeAction
  | HomeCardsAction
  | FormFieldsAction
  | FormCardsAction
  | LimitHomeAction
  | SortingHomeAction;
