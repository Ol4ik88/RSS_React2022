import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import formReducer from './formSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    form: formReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
