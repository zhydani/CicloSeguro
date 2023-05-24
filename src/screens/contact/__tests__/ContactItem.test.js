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
    expect(getByText('(123) 456-7890')).toBeTruthy();
  });

  it('should render placeholder for contact name if it is undefined', () => {
    const contact = {
      number: '1234567890'
    };

    const { getByTestId } = render(<ContactItem contact={contact} />);

    const placeholder = getByTestId('placeholder');
    expect(placeholder).toBeTruthy();
    expect(placeholder.children[0].props.children).toBe('');
  });
});
