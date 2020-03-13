import React from 'react';
import '../css/DataTable.css';


interface DataTableProps {
    content: string;
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
            );;
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
        return (
            <tr>
                <td>1</td>
                <td>Jake</td>
                <td>Waldrip</td>
            </tr>
        );
    }

    getDataCitations() {
        return (
            <tr>
                <td>1</td>
                <td>1248</td>
                <td>2020</td>
                <td>Billy</td>
            </tr>
        );
    }

    render() {
        return (
            <table className='center-table'>
                <this.getHeaders />
                <this.getData />
            </table>
        );
    }
}

export default DataTable;
