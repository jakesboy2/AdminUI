import React from 'react';
import { render } from '@testing-library/react';
import NavbarItem from '../components/NavbarItem';

test('shows the navbar item text', () => {
    const { getByText } = render(<NavbarItem name="Bill" handleClick={() => {}}/>);
    const header = getByText("Bill");
    expect(header).toBeInTheDocument();
});
