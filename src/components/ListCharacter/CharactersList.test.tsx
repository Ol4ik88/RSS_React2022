import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';
import { fakeCards } from 'data/data';

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

    const { findByText } = render(<Home />);
    const notData = await findByText(/no data found/i);
    expect(notData).toBeInTheDocument();
  });

  test('should render all cards', async () => {
    window.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(fakeCards) }));
    const { findAllByText } = render(<Home />);
    (async () => {
      const cards = await findAllByText(/Race:/);
      expect(cards).toHaveLength(2);
    })();
  });
});
