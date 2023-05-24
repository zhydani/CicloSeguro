import { render } from '@testing-library/react-native';
import React from 'react';
import Load from '../Load';

describe('Load component', () => {
  it('should render the activity indicator when control is true', () => {
    const { getByText, getByTestId } = render(<Load control={true} />);
    const activityIndicator = getByTestId('activity-indicator');
    const textElement = getByText('Carregando localização...');

    expect(activityIndicator).toBeTruthy();
    expect(textElement).toBeTruthy();
  });

  it('should not render anything when control is false', () => {
    const { queryByTestId, queryByText } = render(<Load control={false} />);
    const activityIndicator = queryByTestId('activity-indicator');
    const textElement = queryByText('Carregando localização...');

    expect(activityIndicator).toBeNull();
    expect(textElement).toBeNull();
  });
});
