import React from 'react';
import '../css/Button.css';

interface EditButtonProps {
    content: string;
    handleClick: () => void;
}

interface EditButtonState {}

class EditButton extends React.Component<EditButtonProps, EditButtonState> {
    render() {
        return (
            <button className="btn btn-default" onClick={() => this.props.handleClick()}>Edit</button>
        );
    }
}

export default EditButton;
