import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../Navbar';

test('should fail', () => {
  const { getAllByText } = render(<Navbar />);
  const header = getAllByText("NavbarItemHere");
  header.forEach((h) => {
      expect(h).toBeInTheDocument();
  });
});
