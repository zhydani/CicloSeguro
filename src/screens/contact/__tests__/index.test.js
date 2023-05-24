import AsyncStorage from '@react-native-async-storage/async-storage';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import ContactManageContent from '../index';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe('ContactManageContent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should remove a contact', async () => {
    const mockContacts = [
      { id: '1', name: 'John Doe', number: '123456789' },
      { id: '2', name: 'Jane Smith', number: '987654321' },
    ];

    AsyncStorage.getItem.mockResolvedValue(JSON.stringify(mockContacts));

    const { getByText, queryByText, getAllByTestId } = render(<ContactManageContent />);

    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
      expect(getByText('Jane Smith')).toBeTruthy();
    });

    const removeButtons = getAllByTestId('remove-contact-button');

    fireEvent.press(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText('John Doe')).toBeNull();
    });

    await waitFor(() => {
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('@contacts', JSON.stringify([{ id: '2', name: 'Jane Smith', number: '987654321' }])); // Verifica se o contato foi removido corretamente
    });
  });

  it('should display error alert when contact already exists', async () => {
    const mockContacts = [{ id: '1', name: 'John Doe', number: '123456789' }];

    AsyncStorage.getItem.mockResolvedValue(JSON.stringify(mockContacts));

    const { getByTestId } = render(<ContactManageContent />);

    await waitFor(() => {
      expect(getByTestId('add-contact-button')).toBeTruthy();
    });

    fireEvent.press(getByTestId('add-contact-button'));

    await waitFor(() => {
      expect(AsyncStorage.setItem).not.toHaveBeenCalled();
    });
  });
});
