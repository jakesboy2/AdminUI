import React from 'react';
import '../css/DataTable.css';
import UserRow from './UserRow';
import CitationRow from './CitationRow'


interface DataTableProps {
    content: string,
    users: {id: string, first_name: string, last_name: string}[],
    citations: {id: string, citationNumber: string, dateGiven: string, givenBy: string}[]
}

interface DataTableState {}

class DataTable extends React.Component<DataTableProps, DataTableState> {
    constructor(props: DataTableProps) {
        super(props);
        this.getData = this.getData.bind(this);
        this.getHeaders = this.getHeaders.bind(this);
    }

    getHeaders() {
        if(this.props.content === 'users') {
            return (
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            );
        }
        else if(this.props.content === 'citations') {
            return (
                <tr>
                    <th>ID</th>
                    <th>Citation Number</th>
                    <th>Date Given</th>
                    <th>Given By</th>
                </tr>
            );
        }
        return null;
    }

    getData() {
        if(this.props.content === 'users') {
            return this.getDataUsers();
        }
        else if(this.props.content === 'citations') {
            return this.getDataCitations();
        }
        return null;
    }

    getDataUsers() {
        return this.props.users.map((row, index) => {
            return (
                <UserRow key={row.id} user={row} />
            );
        });
    }

    getDataCitations() {
        return this.props.citations.map((row, index) => {
            console.log('row', row);
            return (
                <CitationRow key={row.id} citation={row} />
            );
        });
    }

    render() {
        return (
            <table className='center-table'>
                <thead>
                    <this.getHeaders />
                </thead>
                <tbody>
                    {this.getData()}
                </tbody>
            </table>
        );
    }
}

export default DataTable;
