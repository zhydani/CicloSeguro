import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Alert from '../Alert';

describe('Alert component', () => {
  it('should render correctly with the provided props', () => {
    const controlAlert = true;
    const label = 'Test Alert';
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

    const modal = getByTestId('alert-modal');
    const labelElement = getByText(label);
    const alertIcon = getByTestId('alert-icon');

    expect(modal).toBeTruthy();
    expect(labelElement).toBeTruthy();
    expect(labelElement.props.style.fontSize).toBe(size);
    // expect(alertIcon.props.name).toBe(nameIcon);
    // expect(alertIcon.props.color).toBe(colorIcon);
  });

  it('should call onPress when close button is pressed', () => {
    const controlAlert = true;
    const onPress = jest.fn();

    const { getByTestId } = render(
      <Alert controlAlert={controlAlert} onPress={onPress} />
    );

    const closeButton = getByTestId('close-button');
    fireEvent.press(closeButton);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
