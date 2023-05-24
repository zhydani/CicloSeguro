import { render } from '@testing-library/react-native';
import React from 'react';
import ListEmpty from '../ListEmpty';

describe('ListEmpty component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<ListEmpty />);
    const textElement = getByText('Nenhum Contato Cadastrado');

    expect(textElement).toBeTruthy();
  });
});
