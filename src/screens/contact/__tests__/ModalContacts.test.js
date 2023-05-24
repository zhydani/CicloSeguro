import { fireEvent, render, waitFor } from '@testing-library/react-native';
import * as Contacts from 'expo-contacts';
import { default as React } from 'react';
import ModalContacts from '../ModalContacts';

jest.mock('expo-contacts', () => ({
  requestPermissionsAsync: jest.fn(),
  getContactsAsync: jest.fn(),
}));

describe('ModalContacts', () => {
  it('should render contacts and add new contact', async () => {
    const mockContacts = [
      { id: '1', name: 'John Doe', phoneNumbers: [{ digits: '123456789' }] },
      { id: '2', name: 'Jane Smith', phoneNumbers: [{ digits: '987654321' }] },
    ];

    Contacts.requestPermissionsAsync.mockResolvedValue({ status: 'granted' });
    Contacts.getContactsAsync.mockResolvedValue({ data: mockContacts });

    const handleAddContact = jest.fn();

    const { getByTestId, getByText, queryByText } = render(<ModalContacts onAddContact={handleAddContact} />);

    fireEvent.press(getByTestId('add-contact-button'));

    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
      expect(getByText('Jane Smith')).toBeTruthy();
    });

    fireEvent.press(getByText('John Doe'));

    expect(handleAddContact).toHaveBeenCalledWith({
      id: '1',
      name: 'John Doe',
      number: '123456789',
    });
  });

  it('should close the modal when pressing the close button', async () => {
    Contacts.requestPermissionsAsync.mockResolvedValue({ status: 'granted' });
    Contacts.getContactsAsync.mockResolvedValue({ data: [] });

    const handleAddContact = jest.fn();

    const { getByTestId, queryByText } = render(<ModalContacts onAddContact={handleAddContact} />);

    fireEvent.press(getByTestId('add-contact-button'));

    expect(queryByText('John Doe')).toBeNull();
    expect(queryByText('Jane Smith')).toBeNull();

    fireEvent.press(getByTestId('close-modal-button'));

    await waitFor(() => {
      expect(queryByText('John Doe')).toBeNull();
      expect(queryByText('Jane Smith')).toBeNull();
    });
  });

  it('should close the modal when pressing the fechar button', async () => {
    Contacts.requestPermissionsAsync.mockResolvedValue({ status: 'granted' });
    Contacts.getContactsAsync.mockResolvedValue({ data: [] });

    const handleAddContact = jest.fn();

    const { getByTestId, queryByText } = render(<ModalContacts onAddContact={handleAddContact} />);

    fireEvent.press(getByTestId('add-contact-button'));

    expect(queryByText('John Doe')).toBeNull();
    expect(queryByText('Jane Smith')).toBeNull();

    fireEvent.press(getByTestId('fechar-modal-button'));

    await waitFor(() => {
      expect(queryByText('John Doe')).toBeNull();
      expect(queryByText('Jane Smith')).toBeNull();
    });
  });

  it('should filter contacts based on search text', async () => {
    const mockContacts = [
      { id: '1', name: 'John Doe', phoneNumbers: [{ digits: '123456789' }] },
      { id: '2', name: 'Jane Smith', phoneNumbers: [{ digits: '987654321' }] },
    ];

    Contacts.requestPermissionsAsync.mockResolvedValue({ status: 'granted' });
    Contacts.getContactsAsync.mockResolvedValue({ data: mockContacts });

    const handleAddContact = jest.fn();

    const { getByTestId, getByPlaceholderText, getByText, queryByText } = render(<ModalContacts onAddContact={handleAddContact} />);

    fireEvent.press(getByTestId('add-contact-button'));

    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
      expect(getByText('Jane Smith')).toBeTruthy();
    });

    fireEvent.changeText(getByPlaceholderText('Buscar contato'), 'John');

    expect(getByText('John Doe')).toBeTruthy();
    expect(queryByText('Jane Smith')).toBeNull();
  });
});

jest.mock('expo-contacts', () => ({
  requestPermissionsAsync: jest.fn(),
  getContactsAsync: jest.fn(),
}));

describe('ModalContacts', () => {
  it('should render contacts and add new contact', async () => {
    const mockContacts = [
      { id: '1', name: 'John Doe', phoneNumbers: [{ digits: '123456789' }] },
      { id: '2', name: 'Jane Smith', phoneNumbers: [{ digits: '987654321' }] },
    ];

    Contacts.requestPermissionsAsync.mockResolvedValue({ status: 'granted' });
    Contacts.getContactsAsync.mockResolvedValue({ data: mockContacts });

    const handleAddContact = jest.fn();

    const { getByTestId, getByText, queryByText } = render(<ModalContacts onAddContact={handleAddContact} />);

    fireEvent.press(getByTestId('add-contact-button'));

    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
      expect(getByText('Jane Smith')).toBeTruthy();
    });

    fireEvent.press(getByText('John Doe'));

    expect(handleAddContact).toHaveBeenCalledWith({
      id: '1',
      name: 'John Doe',
      number: '123456789',
    });
  });

  it('should close the modal when pressing the close button', async () => {
    Contacts.requestPermissionsAsync.mockResolvedValue({ status: 'granted' });
    Contacts.getContactsAsync.mockResolvedValue({ data: [] });

    const handleAddContact = jest.fn();

    const { getByTestId, queryByText } = render(<ModalContacts onAddContact={handleAddContact} />);

    fireEvent.press(getByTestId('add-contact-button'));

    expect(queryByText('John Doe')).toBeNull();
    expect(queryByText('Jane Smith')).toBeNull();

    fireEvent.press(getByTestId('close-modal-button'));

    await waitFor(() => {
      expect(queryByText('John Doe')).toBeNull();
      expect(queryByText('Jane Smith')).toBeNull();
    });
  });

  it('should filter contacts based on search text', async () => {
    const mockContacts = [
      { id: '1', name: 'John Doe', phoneNumbers: [{ digits: '123456789' }] },
      { id: '2', name: 'Jane Smith', phoneNumbers: [{ digits: '987654321' }] },
    ];

    Contacts.requestPermissionsAsync.mockResolvedValue({ status: 'granted' });
    Contacts.getContactsAsync.mockResolvedValue({ data: mockContacts });

    const handleAddContact = jest.fn();

    const { getByTestId, getByPlaceholderText, getByText, queryByText } = render(<ModalContacts onAddContact={handleAddContact} />);

    fireEvent.press(getByTestId('add-contact-button'));

    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
      expect(getByText('Jane Smith')).toBeTruthy();
    });

    fireEvent.changeText(getByPlaceholderText('Buscar contato'), 'John');

    expect(getByText('John Doe')).toBeTruthy();
    expect(queryByText('Jane Smith')).toBeNull();
  });
});
