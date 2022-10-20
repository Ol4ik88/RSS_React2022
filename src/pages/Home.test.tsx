import React from 'react';
import { render } from '@testing-library/react';
import Loading from 'components/common/Loading/Loading';

describe('<Loading />', () => {
  test('should render loading on Home page', async () => {
    const { getByTestId } = render(<Loading isLoaded={false} />);
    expect(getByTestId('loading')).toBeInTheDocument();
  });
});
