import React from 'react';
import '../css/ContentContainer.css'
import CreateButton from './CreateButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DataTable from './DataTable';

interface ContentContainerProps {
    content: string;
}
interface ContentContainerState {
    user: {id: string, first_name: string, last_name: string}[];
    citation: {id: string, citation_number: string, date_given: string, given_by: string}[];
}

class ContentContainer extends React.Component<ContentContainerProps, ContentContainerState> {
    constructor(props: ContentContainerProps) {
        super(props);
        this.DisplayTable = this.DisplayTable.bind(this);
        this.state = {
            user: [],
            citation: []
        }
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
        if (this.props.content === 'users') {
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

    componentDidMount() {
        fetch('https://www.jacobwaldrip.com/api/v1/users/', {
            headers: new Headers( {
              'Authorization': 'Basic ' + btoa('bobbybones:Welcome1!'),
            }),
            credentials: 'same-origin',
            method: 'GET',
            })
            .then((res) => res.json())
            .then((json: any[]) => {
                const users = json as {id: string, first_name: string, last_name: string}[];
                this.setState({user: users});
            });
    }

    componentDidUpdate(prevProps: ContentContainerProps, prevState: ContentContainerState) {
        const { content } = this.props;
        if(content === prevProps.content) {
            return;
        }

        if(this.props.content === 'users') {
            fetch('https://www.jacobwaldrip.com/api/v1/users/', {
            headers: new Headers( {
              'Authorization': 'Basic ' + btoa('bobbybones:Welcome1!'),
            }),
            credentials: 'same-origin',
            method: 'GET',
            })
            .then((res) => res.json())
            .then((json: any[]) => {
                const users = json as {id: string, first_name: string, last_name: string}[];
                this.setState({user: users});
            });
        }
        else if (this.props.content === 'citations') {
            fetch('https://www.jacobwaldrip.com/api/v1/citations/', {
            headers: new Headers( {
              'Authorization': 'Basic ' + btoa('bobbybones:Welcome1!'),
            }),
            credentials: 'same-origin',
            method: 'GET',
            })
            .then((res) => res.json())
            .then((json: any[]) => {
                const citations = json as {id: string, citation_number: string, date_given: string, given_by: string}[];
                this.setState({citation: citations});
            });
        }
    }

    render() {
        return (
            <div className="center-div card-1">
                <this.DisplayTable />
                <br/>
                <DataTable content={this.props.content} users={this.state.user} citations={this.state.citation}/>
            </div>
        );
    }
}

export default ContentContainer;
