import { formatPhoneNumber } from '../FormatNumber';

describe('formatPhoneNumber', () => {
  it('should format 11-digit number', () => {
    const number = '11987654321';
    const formattedNumber = formatPhoneNumber(number);
    expect(formattedNumber).toBe('(11) 98765-4321');
  });

  it('should format 12-digit number starting with 0', () => {
    const number = '012345678901';
    const formattedNumber = formatPhoneNumber(number);
    expect(formattedNumber).toBe('(12) 34567-8901');
  });

  it('should format number starting with +55', () => {
    const number = '+5511987654321';
    const formattedNumber = formatPhoneNumber(number);
    expect(formattedNumber).toBe('(11) 98765-4321');
  });

  it('should format 8-digit number', () => {
    const number = '12345678';
    const formattedNumber = formatPhoneNumber(number);
    expect(formattedNumber).toBe('1234-5678');
  });

  it('should format 9-digit number', () => {
    const number = '123456789';
    const formattedNumber = formatPhoneNumber(number);
    expect(formattedNumber).toBe('12345-6789');
  });

  it('should return the number if no formatting rule is matched', () => {
    const number = '123';
    const formattedNumber = formatPhoneNumber(number);
    expect(formattedNumber).toBe(number);
  });
});
