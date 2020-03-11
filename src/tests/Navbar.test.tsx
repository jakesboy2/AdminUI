import React from 'react';
import { render, getAllByDisplayValue } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('Checks for the correct links', () => {
    const { getByText } = render(<Navbar handleClick={() => {}}/>);
    const manageUsersLink = getByText("Manage Users")
    const manageCitationsLink = getByText("Manage Citations")
    expect(manageUsersLink).toBeInTheDocument();
    expect(manageCitationsLink).toBeInTheDocument();
});
