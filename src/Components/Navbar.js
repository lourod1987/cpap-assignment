import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <img src="" alt=""/>
                <h1>Aggregated News</h1>
                <input type="text"  placeholder="Search"/>
                <nav>
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