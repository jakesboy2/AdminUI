import React from 'react';
import '../css/Body.css';
import Navbar from './Navbar'
import ContentContainer from './ContentContainer';

interface BodyProps {}
interface BodyState {
    content: string;
}

class Body extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
        this.state = {
            content: 'users'
        }
    }

    handleClick(clicked: string) {
        if(clicked === 'Manage Users') {
            this.setState({content: 'users'});
        }
        else if(clicked === 'Manage Citations') {
            this.setState({content: 'citations'});
        }
    }

    render() {
        return (
            <div>
                <Navbar handleClick={this.handleClick.bind(this)} />
                <div className="container">
                    <ContentContainer content={this.state.content} />
                </div>
            </div>
        );
    }
}

export default Body;
