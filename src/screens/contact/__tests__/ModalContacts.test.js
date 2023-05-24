import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import ModalContacts from '../ModalContacts';

jest.mock('expo-contacts', () => ({
  requestPermissionsAsync: jest.fn().mockResolvedValue({ status: 'granted' }),
  getContactsAsync: jest.fn().mockResolvedValue({ data: [] }),
}));

describe('ModalContacts', () => {
  it('should render and open the modal when "Adicionar Contato" button is pressed', async () => {
    const onAddContact = jest.fn();
    const { getByText, queryByPlaceholderText } = render(<ModalContacts onAddContact={onAddContact} />);

    // Clica no botão "Adicionar Contato" para abrir o modal
    fireEvent.press(getByText('Adicionar Contato'));

    // Verifica se o campo de busca está sendo renderizado
    expect(queryByPlaceholderText('Buscar contato')).toBeTruthy();
  });

  it('should close modal when "Fechar" button is pressed', async () => {
    const onAddContact = jest.fn();
    const { getByText, queryByPlaceholderText, getByTestId } = render(<ModalContacts onAddContact={onAddContact} />);

    // Clica no botão "Adicionar Contato" para abrir o modal
    fireEvent.press(getByTestId('add-contact-button'));

    // Verifica se o campo de busca está sendo renderizado
    expect(queryByPlaceholderText('Buscar contato')).toBeTruthy();

    // Clica no botão "Fechar" para fechar o modal
    fireEvent.press(getByText('Fechar'));

    // Verifica se o campo de busca não está mais sendo renderizado
    await waitFor(() => {
      expect(queryByPlaceholderText('Buscar contato')).toBeFalsy();
    });
  });
});
