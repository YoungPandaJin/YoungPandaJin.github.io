import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
