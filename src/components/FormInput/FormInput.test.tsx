import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from 'pages/FormPage';
import FormInput from './FormInput';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('<FormInput />', () => {
  describe('with type "text"', () => {
    test('should render nameInput', () => {
      render(
        <Provider store={store}>
          <FormPage />
        </Provider>
      );
      const nameInput = screen.getByLabelText(/Name:/i);
      expect(nameInput).toBeInTheDocument();
    });
    test('if the name is not valid, then render the error message', async () => {
      render(
        <Provider store={store}>
          <FormPage />
        </Provider>
      );
      const nameInput = screen.getByLabelText(/Name:/i);
      userEvent.type(nameInput, 'H');

      expect(screen.queryByText(/Please enter more than one character/i)).not.toBeInTheDocument();
      userEvent.keyboard('{Enter}');
      expect(await screen.findByText(/Please enter more than one character/i)).toBeInTheDocument();
    });
  });

  describe('with type "date"', () => {
    test('should render dateInput', () => {
      render(
        <Provider store={store}>
          <FormPage />
        </Provider>
      );
      const dateInput = screen.getByLabelText(/Birthday:/i);
      expect(dateInput).toBeInTheDocument();
    });
    test('if the date is empty, then render the error message', async () => {
      render(
        <Provider store={store}>
          <FormPage />
        </Provider>
      );
      const dateInput = screen.getByLabelText(/Birthday:/i);
      userEvent.type(dateInput, '');

      expect(screen.queryByText('Please enter correct birthday')).not.toBeInTheDocument();
      userEvent.keyboard('{Enter}');
      expect(await screen.findByText('Please enter correct birthday')).toBeInTheDocument();
    });
    test('if the date is not valid for birthday, then render the error message', async () => {
      render(
        <Provider store={store}>
          <FormPage />
        </Provider>
      );
      const dateInput = screen.getByLabelText(/Birthday:/i);
      userEvent.type(dateInput, '2030-01-01');

      expect(screen.queryByText('Date must be less than today')).not.toBeInTheDocument();
      userEvent.keyboard('{Enter}');
      expect(await screen.findByText('Date must be less than today')).toBeInTheDocument();
    });
  });

  describe(' with type "file"', () => {
    test('should render fileInput', () => {
      render(
        <Provider store={store}>
          <FormPage />
        </Provider>
      );
      const fileInput = screen.getByLabelText(/Profile picture:/i);
      expect(fileInput).toBeInTheDocument();
    });
    test('should upload file', () => {
      const file = new File(['hello'], 'hello.png', { type: 'image/png' });
      const registerMock = jest.fn();
      const errors = { name: {} };
      render(
        <Provider store={store}>
          <FormInput
            label="Profile picture:"
            type="file"
            name="file"
            register={registerMock}
            errors={errors}
            validationSchema={{
              required: 'Please select picture',
            }}
            required
          />
        </Provider>
      );
      const fileInput: HTMLInputElement = screen.getByLabelText(/Profile picture:/i);
      userEvent.upload(fileInput, file);
      expect((fileInput.files as FileList)[0]).toStrictEqual(file);
      expect(fileInput.files).toHaveLength(1);
    });
    test('if the file is not selected and the name is entered correctly, an error message will appear', async () => {
      render(
        <Provider store={store}>
          <FormPage />
        </Provider>
      );
      const nameInput = screen.getByLabelText(/Name:/i);
      userEvent.type(nameInput, 'my name');

      expect(screen.queryByText('Please select picture')).not.toBeInTheDocument();
      userEvent.keyboard('{Enter}');
      expect(await screen.findByText('Please select picture')).toBeInTheDocument();
    });
  });

  describe('with type "checkbox"', () => {
    test('should render nameInput', () => {
      render(
        <Provider store={store}>
          <FormPage />
        </Provider>
      );
      const ckeckboxInput = screen.getByLabelText(/Agree to /i);
      expect(ckeckboxInput).toBeInTheDocument();
    });
    test('if no flag is not ckecked, then render an error message', async () => {
      render(
        <Provider store={store}>
          <FormPage />
        </Provider>
      );
      expect(screen.queryByText('You should agree')).not.toBeInTheDocument();

      const ckeckboxInput = screen.getByLabelText(/Agree to /i);
      userEvent.click(ckeckboxInput);
      expect(ckeckboxInput).toBeChecked();

      userEvent.click(ckeckboxInput);
      expect(ckeckboxInput).not.toBeChecked();

      userEvent.keyboard('{Enter}');
      expect(await screen.findByText('You should agree')).toBeInTheDocument();
    });
  });
});
