import { render } from '@testing-library/react-native';
import React from 'react';
import App from '../App';

// Mockando as dependências
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }) => <>{children}</>,
}));
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(() => ({
    Navigator: ({ children }) => <>{children}</>,
    Screen: ({ children }) => <>{children}</>,
  })),
}));

describe('App component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<App />);

  });
});
