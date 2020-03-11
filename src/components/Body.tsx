import React from 'react';
import '../css/Body.css';
import Navbar from './Navbar'

interface BodyProps {}
interface BodyState {}
class Body extends React.Component<BodyProps, BodyState> {
    handleClick(clicked: string) {
        console.log("Clicked", clicked);
    }
    render() {
        return (
            <div>
                <Navbar handleClick={this.handleClick.bind(this)} />
                <div>
                    <h1> Hello, World! </h1>
                    <p>This is coming from the body</p>
                </div>
            </div>
        );
    }
    
}

export default Body;
