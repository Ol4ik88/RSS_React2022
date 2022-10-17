import React from 'react';
import { render, screen } from '@testing-library/react';
import { cards } from '../../../data/data';
import CardItem from './CardItem';

describe('<CardItem />', () => {
  test('should render foto on card', () => {
    render(<CardItem card={cards[0]} />);
    const foto = screen.getByRole('img');
    expect(foto).toBeInTheDocument();
  });
  test('should render title on card', () => {
    render(<CardItem card={cards[0]} />);
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
  test('should render description on card', () => {
    render(<CardItem card={cards[0]} />);
    const description = screen.getByText(/text/i);
    expect(description).toBeInTheDocument();
  });
});
