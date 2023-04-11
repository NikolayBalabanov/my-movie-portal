import React, { Component } from 'react';
import NavItem from './NavItem';
export default class Nav extends Component {
    render() {
        return (React.createElement("nav", { className: "" },
            React.createElement("ul", { className: "list-none flex" },
                React.createElement(NavItem, { className: "mr-3 font-bold text-xl  hover:text-red-400 transition-colors", title: "actors", to: "/actors" }),
                React.createElement(NavItem, { className: "mr-3 font-bold text-xl hover:text-red-400 transition-colors", title: "movies", to: "/movies" }))));
    }
}
