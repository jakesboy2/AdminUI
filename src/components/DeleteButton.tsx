import React from 'react';
import '../css/Button.css';

interface DeleteButtonProps {
    content: string;
    handleClick: () => void;
}

interface DeleteButtonState {}

class DeleteButton extends React.Component<DeleteButtonProps, DeleteButtonState> {
    render() {
        return (
            <button className="btn btn-default" onClick={() => this.props.handleClick()}>Delete</button>
        );
    }
}

export default DeleteButton;
