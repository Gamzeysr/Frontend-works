
import './App.css';
import React, { Component } from 'react';
import Navbar from "./Navbar";
import User from './User';



class App extends Component {
    render() {
        return (
            <div className="container">
                <Navbar title="User App 2" />
                <hr />
                <User name="Gamze"
                    department="FullStackDevoloper"
                    salary="12000 " />
                <User name="Mesut"
                    department="FullStackDevoloper"
                    salary="25000 " />
            </div>
        );
    }
}
export default App;



