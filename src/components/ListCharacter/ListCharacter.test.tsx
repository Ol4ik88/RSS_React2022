import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';
import { fakeCards } from 'data/data';

describe('<ListCharacter />', () => {
  test('renders list character', async () => {
    window.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(fakeCards) }));

    const { findByTestId } = render(<Home />);
    const cardList = await findByTestId('ListCharacter');
    expect(cardList).toBeInTheDocument();
  });

  test('renders all cards', async () => {
    window.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(fakeCards) }));

    const { findAllByTestId } = render(<Home />);
    const cards = await findAllByTestId('CardCharacter');
    expect(cards).toHaveLength(2);
  });
});
