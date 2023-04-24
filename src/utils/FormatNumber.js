export function formatPhoneNumber(number) {
    if (number.length === 11) {
        return `(${number.substring(0, 2)}) ${number.substring(2, 7)}-${number.substring(7)}`;
    }
    if (number.length === 12 && number.startsWith('0')) {
        return `(${number.substring(1, 3)}) ${number.substring(3, 8)}-${number.substring(8)}`;
    }
    if (number.startsWith('+55')) {
        number = number.substring(3);
        if (number.length === 10) {
        return `(${number.substring(0, 2)}) ${number.substring(2, 6)}-${number.substring(6)}`;
        }
        if (number.length === 11) {
        return `(${number.substring(0, 2)}) ${number.substring(2, 7)}-${number.substring(7)}`;
        }
        if (number.length === 12 && number.startsWith('0')) {
        return `(${number.substring(1, 3)}) ${number.substring(3, 8)}-${number.substring(8)}`;
        }
    }
    if (number.length === 8) {
        return `${number.substring(0, 4)}-${number.substring(4)}`;
    }
    if (number.length === 9) {
        return `${number.substring(0, 5)}-${number.substring(5)}`;
    }
    return number;
}