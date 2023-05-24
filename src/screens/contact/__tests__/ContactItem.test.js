import { render } from '@testing-library/react-native';
import React from 'react';
import ContactItem from '../ContactItem';

describe('ContactItem', () => {
  it('should render contact name and number', () => {
    const contact = {
      name: 'John Doe',
      number: '1234567890'
    };

    const { getByText } = render(<ContactItem contact={contact} />);

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('1234567890')).toBeTruthy();
  });
});
