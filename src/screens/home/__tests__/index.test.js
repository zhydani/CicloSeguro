import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../index';

// Mockando as dependências
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(() => Promise.resolve(JSON.stringify([]))),
}));
jest.mock('expo-linking', () => ({
  openURL: jest.fn(),
}));
jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: jest.fn(() => Promise.resolve()),
  getCurrentPositionAsync: jest.fn(() =>
    Promise.resolve({
      coords: {
        latitude: -10.249091,
        longitude: -48.324285,
      },
    })
  ),
}));

describe('HomeScreen component', () => {
  it('should render and handle button press correctly', async () => {
    const { getByTestId, getByText } = render(<HomeScreen />);

    const button = getByTestId('location-button');
    fireEvent.press(button);

    await waitFor(() => expect(getByText('Mensagem enviada')).toBeDefined());

    expect(getByText('Mensagem enviada')).toBeDefined();
  });
});
