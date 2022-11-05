import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';
import { fakeCards } from 'data/data';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('<CharactersList />', () => {
  test('should render list character', async () => {
    window.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve({}) }));

    const { findByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const notData = await findByText(/no data found/i);
    expect(notData).toBeInTheDocument();
  });

  test('should render all cards', async () => {
    window.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(fakeCards) }));
    const { findAllByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    (async () => {
      const cards = await findAllByText(/Race:/);
      expect(cards).toHaveLength(2);
    })();
  });
});
