import React, { Component } from 'react';
import Nav from './Nav/Nav';

export default class Header extends Component {
  render() {
    return (
      <header className="bg-gray-800 ">
        <div className="container mx-auto h-[50px] flex justify-between px-5 items-center text-white">
          <h1 className="font-bold">Searcher</h1>
          <Nav />
        </div>
      </header>
    );
  }
}
