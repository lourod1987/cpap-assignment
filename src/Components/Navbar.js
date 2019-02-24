import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <img src="" alt=""/>
                <Link to="/"><h1>Aggregated News</h1></Link>
                <input type="text"  placeholder="Search"/>
                <nav>
                        <Link to="/userinfo">User Info</Link>
                    <ul>
                        <li>Sign Up</li>
                        <li>Get the App</li>
                        <li>Log in</li>
                    </ul>
                </nav>
            </header>
        );
    }
}