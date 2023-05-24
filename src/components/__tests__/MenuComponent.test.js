import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Menu from '../MenuComponent';
// import { Divider } from '@react-native-material/core';

describe('Menu', () => {
  it('should render menu items', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByText } = render(<Menu navigation={navigation} />);

    expect(getByText('Tela Inicial')).toBeTruthy();
    expect(getByText('Contatos')).toBeTruthy();
  });

  it('should navigate to HomeScreen when "Tela Inicial" is pressed', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByText } = render(<Menu navigation={navigation} />);

    fireEvent.press(getByText('Tela Inicial'));

    expect(navigation.navigate).toHaveBeenCalledWith('HomeScreen');
  });

  it('should navigate to ContactManageScreen when "Contatos" is pressed', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const { getByText } = render(<Menu navigation={navigation} />);

    fireEvent.press(getByText('Contatos'));

    expect(navigation.navigate).toHaveBeenCalledWith('ContactManageScreen');
  });

});
