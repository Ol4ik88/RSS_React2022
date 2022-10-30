import { IFormValues } from 'components/Form/Form.type';
import React, { createContext, useContext, useReducer } from 'react';
import { ICard, ICharacter } from 'type/type';
import appReducer, { initialState } from './appReducer';
import { ActionKind, IAppContext } from './appReducer.type';

const AppContext = createContext<IAppContext>(initialState);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const saveHomeSearch = (text: string) => {
    dispatch({
      type: ActionKind.SAVE_HOME_SEARCH,
      payload: {
        textSearch: text,
      },
    });
  };
  const saveHomePagination = (page: number, pages: number, total: number) => {
    dispatch({
      type: ActionKind.SAVE_HOME_PAGINATION,
      payload: {
        page,
        pages,
        total,
      },
    });
  };
  const saveHomeLimit = (limit: string) => {
    dispatch({
      type: ActionKind.SAVE_HOME_LIMIT,
      payload: {
        limit: limit,
      },
    });
  };
  const saveHomeSort = (sorting: string) => {
    dispatch({
      type: ActionKind.SAVE_HOME_SORTING,
      payload: {
        sorting: sorting,
      },
    });
  };
  const saveHomeResult = (cards: ICharacter[]) => {
    dispatch({
      type: ActionKind.SAVE_HOME_RESULT,
      payload: {
        cards: cards,
      },
    });
  };
  const saveFormData = (formValues: IFormValues) => {
    dispatch({
      type: ActionKind.SAVE_FORM_DATA,
      payload: {
        formValues: formValues,
      },
    });
  };
  const saveFormResult = (cards: ICard[]) => {
    dispatch({
      type: ActionKind.SAVE_FORM_RESULT,
      payload: {
        cards: cards,
      },
    });
  };
  const value = {
    homeData: state.homeData,
    formData: state.formData,
    saveHomeSort,
    saveHomeSearch,
    saveHomePagination,
    saveHomeLimit,
    saveHomeResult,
    saveFormData,
    saveFormResult,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
