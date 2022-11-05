import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { FormState } from './slice.type';
import { ICard } from 'type/type';
import { IFormValues } from 'components/Form/Form.type';

const initialState: FormState = {
  cards: [],
  formValues: {
    name: '',
    birthday: '',
    file: null,
    kind: 'Cat',
    switcher: false,
    isAgree: false,
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormCards: (state, action: PayloadAction<ICard[]>) => {
      state.cards = action.payload;
    },
    setFormValues: (state, action: PayloadAction<IFormValues>) => {
      state.formValues = action.payload;
    },
  },
});

export const { setFormCards, setFormValues } = formSlice.actions;

export const selectFormState = (state: RootState) => state.form;

export default formSlice.reducer;
