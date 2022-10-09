import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from 'pages/FormPage';
import FormInput from './FormInput ';

describe('Renders <FormInput /> with type text', () => {
  test('renders nameInput', () => {
    render(<FormPage />);
    const nameInput = screen.getByLabelText(/Name:/i);
    expect(nameInput).toBeInTheDocument();
  });
  test('if the name is not valid, then render the error message', () => {
    render(<FormPage />);
    const nameInput = screen.getByLabelText(/Name:/i);
    userEvent.type(nameInput, 'H');

    expect(screen.queryByText(/Please enter more than one character/i)).not.toBeInTheDocument();
    userEvent.keyboard('{Enter}');
    expect(screen.queryByText(/Please enter more than one character/i)).toBeInTheDocument();
  });
});

describe('Renders <FormInput /> with type date', () => {
  test('renders dateInput', () => {
    render(<FormPage />);
    const dateInput = screen.getByLabelText(/Birthday:/i);
    expect(dateInput).toBeInTheDocument();
  });
  test('if the date is empty, then render the error message', () => {
    render(<FormPage />);
    const dateInput = screen.getByLabelText(/Birthday:/i);
    userEvent.type(dateInput, '');

    expect(screen.queryByText('Please enter correct birthday')).not.toBeInTheDocument();
    userEvent.keyboard('{Enter}');
    expect(screen.queryByText('Please enter correct birthday')).toBeInTheDocument();
  });
  test('if the date is not valid for birthday, then render the error message', () => {
    render(<FormPage />);
    const dateInput = screen.getByLabelText(/Birthday:/i);
    userEvent.type(dateInput, '2030-01-01');

    expect(screen.queryByText('Please enter correct birthday')).not.toBeInTheDocument();
    userEvent.keyboard('{Enter}');
    expect(screen.queryByText('Please enter correct birthday')).toBeInTheDocument();
  });
});

describe('Renders <FormInput /> with type file', () => {
  test('renders fileInput', () => {
    render(<FormPage />);
    const fileInput = screen.getByLabelText(/Profile picture:/i);
    expect(fileInput).toBeInTheDocument();
  });
  test('upload file', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    render(
      <FormInput
        label="Profile picture:"
        type="file"
        name="file"
        reference={createRef()}
        isValid={true}
        errorMessage="Please select picture"
      />
    );
    const fileInput: HTMLInputElement = screen.getByLabelText(/Profile picture:/i);
    userEvent.upload(fileInput, file);
    expect((fileInput.files as FileList)[0]).toStrictEqual(file);
    expect(fileInput.files).toHaveLength(1);
  });
  test('if the file is not selected and the name is entered correctly, an error message will appear', () => {
    render(<FormPage />);
    const nameInput = screen.getByLabelText(/Name:/i);
    userEvent.type(nameInput, 'my name');

    expect(screen.queryByText('Please select picture')).not.toBeInTheDocument();
    userEvent.keyboard('{Enter}');
    expect(screen.queryByText('Please select picture')).toBeInTheDocument();
  });
});

describe('Renders <FormInput /> with type checkbox', () => {
  test('renders nameInput', () => {
    render(<FormPage />);
    const ckeckboxInput = screen.getByLabelText(/Agree to /i);
    expect(ckeckboxInput).toBeInTheDocument();
  });
  test('if no flag is not ckecked, then render an error message', () => {
    render(<FormPage />);
    expect(screen.queryByText('You should agree')).not.toBeInTheDocument();

    const ckeckboxInput = screen.getByLabelText(/Agree to /i);
    userEvent.click(ckeckboxInput);
    expect(ckeckboxInput).toBeChecked();

    userEvent.click(ckeckboxInput);
    expect(ckeckboxInput).not.toBeChecked();

    userEvent.keyboard('{Enter}');
    expect(screen.queryByText('You should agree')).toBeInTheDocument();
  });
});
