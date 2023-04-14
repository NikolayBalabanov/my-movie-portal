import React, { Component } from 'react';
import NavItem from './NavItem';

export interface IPage {
  name: string;
  link: string;
}

export default class Nav extends Component {
  public render() {
    return (
      <nav className="">
        <ul className="list-none flex">
          <NavItem
            className="mr-3 px-4 font-bold text-xl hover:text-red-400 transition-colors"
            title="actors"
            to="/actors"
          />
          <NavItem
            className="mr-3 font-bold text-xl hover:text-red-400 transition-colors"
            title="movies"
            to="/movies"
          />
        </ul>
      </nav>
    );
  }
}
