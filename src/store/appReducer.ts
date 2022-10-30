import { ActionKind, AppAction, GlobalContent, IAppContext } from './appReducer.type';

export const initialState: IAppContext = {
  homeData: {
    textSearch: localStorage.getItem('searchQuery') || '',
    limit: '10',
    sorting: 'name:asc',
    cards: [],
    paginationOptioons: {
      currentPage: 1,
      pageCount: 1,
      totalElements: 1,
    },
  },
  formData: {
    cards: [],
    formValues: {
      name: '',
      birthday: '',
      file: null,
      kind: 'Cat',
      switcher: false,
      isAgree: false,
    },
  },
  saveHomeSearch: () => {},
  saveHomePagination: () => {},
  saveHomeLimit: () => {},
  saveHomeSort: () => {},
  saveFormData: () => {},
  saveHomeResult: () => {},
  saveFormResult: () => {},
};

const appReducer = (state: GlobalContent, action: AppAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.SAVE_HOME_SEARCH:
      return {
        ...state,
        homeData: { ...state.homeData, textSearch: payload.textSearch },
      };
    case ActionKind.SAVE_HOME_PAGINATION:
      return {
        ...state,
        homeData: {
          ...state.homeData,
          paginationOptioons: {
            currentPage: payload.page,
            pageCount: payload.pages,
            totalElements: payload.total,
          },
        },
      };
    case ActionKind.SAVE_HOME_LIMIT:
      return {
        ...state,
        homeData: { ...state.homeData, limit: payload.limit },
      };
    case ActionKind.SAVE_HOME_SORTING:
      return {
        ...state,
        homeData: { ...state.homeData, sorting: payload.sorting },
      };
    case ActionKind.SAVE_HOME_RESULT:
      return {
        ...state,
        homeData: { ...state.homeData, cards: payload.cards },
      };
    case ActionKind.SAVE_FORM_DATA:
      return {
        ...state,
        formData: { ...state.formData, formValues: payload.formValues },
      };
    case ActionKind.SAVE_FORM_RESULT:
      return {
        ...state,
        formData: { ...state.formData, cards: payload.cards },
      };
    default:
      return state;
  }
};

export default appReducer;
