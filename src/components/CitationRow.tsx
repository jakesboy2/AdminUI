import React from 'react';
import '../css/DataTable.css';

interface CitationRowProps {
    citation: {id: string, citationNumber: string, dateGiven: string, givenBy: string};
}

interface CitationRowState {}

class CitationRow extends React.Component<CitationRowProps, CitationRowState> {
    render() {
        return (
            <tr key={this.props.citation.id}>
                <td>{this.props.citation.id}</td>
                <td>{this.props.citation.citationNumber}</td>
                <td>{this.props.citation.dateGiven}</td>
                <td>{this.props.citation.givenBy}</td>
            </tr>
        );
    }
}

export default CitationRow;
