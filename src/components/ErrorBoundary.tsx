import React, { ReactNode } from 'react';
import { ErrorInfo } from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

interface IErrorBoundary {
  children: ReactNode;
}

class ErrorBoundary extends Component<IErrorBoundary> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('ErrorBoundary caught an error', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto">
          <h2>
            There was a huge error with this app.😕
            <Link
              className="py-2 px-4 rounded-lg font-medium bg-blue-500 hover:bg-blue-700 focus-visible::bg-blue-700"
              to="/"
            >
              Click here
            </Link>
            to back to the home page.
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
