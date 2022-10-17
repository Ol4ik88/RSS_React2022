import React from 'react';
import { render, screen } from '@testing-library/react';
import { fakeCards } from 'data/data';
import Modal from './Modal';

describe('<Modal />', () => {
  const closeModal = jest.fn();
  test('if the activeModal is true, then the modal has active class', async () => {
    render(<Modal card={fakeCards.docs[0]} activeModal={true} onClose={closeModal} />);
    const modalOverlay = screen.getByTestId('modal-overlay');
    expect(modalOverlay).toHaveClass('active');
  });
  test('if the activeModal is false, then the modal has not active class', async () => {
    render(<Modal card={fakeCards.docs[0]} activeModal={false} onClose={closeModal} />);
    const modalOverlay = screen.getByTestId('modal-overlay');
    expect(modalOverlay).not.toHaveClass('active');
  });
  test('should render card content in modal', async () => {
    render(<Modal card={fakeCards.docs[0]} activeModal={true} onClose={closeModal} />);
    const content = screen.getByRole('heading');
    expect(content).toHaveTextContent(fakeCards.docs[0].name);
  });
});
