import React from 'react';
import '../css/DataTable.css';

interface CitationRowProps {
    citation: {id: string, citation_number: string, date_given: string, given_by: string};
}

interface CitationRowState {}

class CitationRow extends React.Component<CitationRowProps, CitationRowState> {
    render() {
        return (
            <tr key={this.props.citation.id}>
                <td>{this.props.citation.id}</td>
                <td>{this.props.citation.citation_number}</td>
                <td>{this.props.citation.date_given}</td>
                <td>{this.props.citation.given_by}</td>
            </tr>
        );
    }
}

export default CitationRow;
