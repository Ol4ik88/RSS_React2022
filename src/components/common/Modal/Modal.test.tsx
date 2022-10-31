import React from 'react';
import { render, screen } from '@testing-library/react';
import { fakeCards } from 'data/data';
import Modal from './Modal';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
describe('<Modal />', () => {
  const closeModal = jest.fn();
  test('should have active class when modal is active', async () => {
    render(<Modal card={fakeCards.docs[0]} isModalActive={true} setActive={closeModal} />);
    const modalOverlay = screen.getByTestId('modal-overlay');
    expect(modalOverlay).toHaveClass('active');
  });
  test('should not have active class when modal is not active', async () => {
    render(<Modal card={fakeCards.docs[0]} isModalActive={false} setActive={closeModal} />);
    const modalOverlay = screen.getByTestId('modal-overlay');
    expect(modalOverlay).not.toHaveClass('active');
  });
  test('should render card content in modal', async () => {
    render(<Modal card={fakeCards.docs[0]} isModalActive={true} setActive={closeModal} />);
    const content = screen.getByRole('heading', { name: 'Aegnor' });
    expect(content).toBeInTheDocument();
  });
});
