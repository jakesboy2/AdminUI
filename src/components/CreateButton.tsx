import React from 'react';
import '../css/Button.css';

interface CreateButtonProps {
    content: string;
    handleClick: () => void;
}

interface CreateButtonState {}

class CreateButton extends React.Component<CreateButtonProps, CreateButtonState> {
    render() {
        return (
            <button className="btn btn-default" onClick={() => this.props.handleClick()}>Create</button>
        );
    }
}

export default CreateButton;
