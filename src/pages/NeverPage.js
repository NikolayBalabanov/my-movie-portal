import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class NeverPage extends Component {
    render() {
        return (React.createElement("div", { className: "container mx-auto" },
            React.createElement("h2", { className: "" }, `404 — page doesn't exist`),
            React.createElement(Link, { to: "/", className: "" }, "Back to posts")));
    }
}
