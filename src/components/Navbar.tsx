import React from 'react';
import '../css/Navbar.css';
import NavbarItem from './NavbarItem';

interface NavbarProps {
    handleClick: (clicked: string) => void;
}

class Navbar extends React.Component<NavbarProps> {
    constructor(props: NavbarProps) {
        super(props);
    }

    render() {
        return (
            <nav>
                <header>
                    <h1>Admin Interface</h1>
                </header>
                <ul className="NavbarBody">
                    <NavbarItem name="Manage Users" handleClick={this.props.handleClick} />
                    <NavbarItem name="Manage Citations" handleClick={this.props.handleClick} />
                </ul>
            </nav>
        );
    }
}

export default Navbar;
