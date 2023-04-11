import React, { Component } from 'react';
import Nav from './Nav/Nav';
export default class Header extends Component {
    render() {
        return (React.createElement("header", { className: "bg-gray-800 " },
            React.createElement("div", { className: "container mx-auto h-[50px] flex justify-between px-5 items-center text-white" },
                React.createElement("h1", { className: "font-bold" }, "Searcher"),
                React.createElement(Nav, null))));
    }
}
