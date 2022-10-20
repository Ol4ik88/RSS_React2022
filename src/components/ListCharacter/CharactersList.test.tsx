import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';
import { fakeCards } from 'data/data';

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

    const { findAllByTestId } = render(<Home />);
    const cards = await findAllByTestId('CardCharacter');
    expect(cards).toHaveLength(2);
  });
});
