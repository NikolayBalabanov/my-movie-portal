import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class NavItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, to, className } = this.props;
        return (React.createElement("li", null,
            React.createElement(Link, { className: className, to: to }, title)));
    }
}
