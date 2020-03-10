import React from 'react';
import './css/Body.css';
import Navbar from './Navbar'

function Body() {
  return (
      <div>
        <Navbar />
        <div className="App">
          <h1> Hello, World! </h1>
          <p>This is coming from the body</p>
      </div>
    </div>
  );
}

export default Body;
