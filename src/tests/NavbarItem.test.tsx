import React from 'react';
import { render } from '@testing-library/react';
import NavbarItem from '../NavbarItem';

test('shows the navbar item text', () => {
  const { getByText } = render(<NavbarItem />);
  const header = getByText("NavbarItemHere");
  expect(header).toBeInTheDocument();
});
