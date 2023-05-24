import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import Header from '../HeaderComponent';

describe('Header component', () => {
  it('should toggle the backdrop when the menu button is pressed', () => {
    const content = <Text>Content</Text>;
    const subheader = 'Subheader';
    const navigation = jest.fn();

    const { getByTestId } = render(
      <Header content={content} subheader={subheader} navigation={navigation} />
    );

    const menuButton = getByTestId('menu-button');
    const backdrop = getByTestId('backdrop');

    expect(backdrop.props.revealed).toBe(false);
    fireEvent.press(menuButton);
    expect(backdrop.props.revealed).toBe(true);
    fireEvent.press(menuButton);
    expect(backdrop.props.revealed).toBe(false);
  });
});
