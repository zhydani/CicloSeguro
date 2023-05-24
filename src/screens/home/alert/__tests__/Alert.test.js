import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Alert from '../Alert';

describe('Alert component', () => {
  it('should render with the provided props', () => {
    const controlAlert = true;
    const label = 'Alert label';
    const onPress = jest.fn();
    const size = 20;
    const nameIcon = 'check';
    const colorIcon = 'green';

    const { getByText, getByTestId } = render(
      <Alert
        controlAlert={controlAlert}
        label={label}
        onPress={onPress}
        size={size}
        nameIcon={nameIcon}
        colorIcon={colorIcon}
      />
    );

    const alertLabel = getByText(label);
    expect(alertLabel).toBeDefined();

    const closeButton = getByTestId('close-button');
    fireEvent.press(closeButton);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
