import React from 'react';
import { render } from '@testing-library/react';
import Body from '../Body';

test('shows the bodys text', () => {
  const { getByText } = render(<Body />);
  const header = getByText("Hello, World!");
  expect(header).toBeInTheDocument();
});
