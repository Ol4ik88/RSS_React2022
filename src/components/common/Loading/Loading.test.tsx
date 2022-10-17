import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../pages/Home';

describe('<Loading />', () => {
  test('should render loading on Home page', async () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('loading')).toBeInTheDocument();
  });
});
