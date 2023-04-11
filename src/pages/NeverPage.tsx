import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NeverPage extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <h2 className="">{`404 — page doesn't exist`}</h2>
        <Link to="/" className="">
          Back to posts
        </Link>
      </div>
    );
  }
}
