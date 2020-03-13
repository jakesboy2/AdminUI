import React from 'react';
import '../css/ContentContainer.css'
import CreateButton from './CreateButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DataTable from './DataTable';

interface ContentContainerProps {
    content: string;
}
interface ContentContainerState {}

class ContentContainer extends React.Component<ContentContainerProps, ContentContainerState> {
    constructor(props: ContentContainerProps) {
        super(props);
        this.DisplayTable = this.DisplayTable.bind(this);
    }

    handleCreateClickUsers() {
        console.log("create users");
    }

    handleCreateClickCitations() {
        console.log("create citations");
    }

    handleEditClickUsers() {
        console.log("edit users");
    }

    handleEditClickCitations() {
        console.log("edit citations");
    }

    handleDeleteClickUsers() {
        console.log("delete users");
    }

    handleDeleteClickCitations() {
        console.log("delete citations");
    }

    DisplayTable() {
        if(this.props.content === 'users') {
            return (
                <div>
                    <h1>Manage Users</h1>
                    <hr/>
                    <CreateButton content={this.props.content} handleClick={this.handleCreateClickUsers} />
                    <EditButton content={this.props.content} handleClick={this.handleEditClickUsers} />
                    <DeleteButton content={this.props.content} handleClick={this.handleDeleteClickUsers} />
                </div>
            );
        }
        else if(this.props.content === 'citations') {
            return (
                <div>
                    <h1>Manage Citations</h1>
                    <hr/>
                    <CreateButton content={this.props.content} handleClick={this.handleCreateClickCitations} />
                    <EditButton content={this.props.content} handleClick={this.handleEditClickCitations} />
                    <DeleteButton content={this.props.content} handleClick={this.handleDeleteClickCitations} />
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div className="center-div card-1">
                <this.DisplayTable />
                <br/>
                <DataTable content={this.props.content} />
            </div>
        );
    }
}

export default ContentContainer;
