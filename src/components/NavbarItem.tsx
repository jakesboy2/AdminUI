import React from 'react';
import '../css/Navbar.css';

interface NavbarItemProps {
    name: string;
    handleClick: (clicked: string) => void;
}

function NavbarItem(props: NavbarItemProps) {
    return (
        <div>
            <li className="NavbarItem" onClick={() => props.handleClick(props.name)}>{props.name}</li>
        </div>
    );
}

export default NavbarItem;
