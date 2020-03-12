import React from 'react';
import '../css/ContentContainer.css'

interface ContentContainerProps {
    content: string;
}
interface ContentContainerState {}

class ContentContainer extends React.Component<ContentContainerProps, ContentContainerState> {
    constructor(props: ContentContainerProps) {
        super(props);
        this.DisplayTable = this.DisplayTable.bind(this);
    }

    DisplayTable() {
        if(this.props.content === 'users') {
            return (
                <div className="card-1">
                    <h1>Manage Users</h1>
                    <hr/>
                </div>
            );
        }
        else if(this.props.content === 'citations') {
            return (
                <div className="card-1">
                    <h1>Manage Citations</h1>
                    <hr/>
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div className="center-div">
                <this.DisplayTable />
            </div>
        );
    }
}

export default ContentContainer;
