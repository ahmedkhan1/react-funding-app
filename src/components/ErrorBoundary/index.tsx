import React, { Component } from 'react';

type ErrorProps = {
  children: React.ReactNode
}

type ErrorState = {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props:ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? <h2>We apologize, something went wrong</h2> : children;
  }
}

export default ErrorBoundary;
