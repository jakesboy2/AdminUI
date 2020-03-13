import React from 'react';
import '../css/DataTable.css';

interface UserRowProps {
    user: {id: string, first_name: string, last_name: string};
}

interface UserRowState {}

class UserRow extends React.Component<UserRowProps, UserRowState> {
    constructor(props: UserRowProps) {
        super(props);
    }

    render() {
        return (
            <tr key={this.props.user.id}>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.first_name}</td>
                <td>{this.props.user.last_name}</td>
            </tr>
        );
    }
}

export default UserRow;
