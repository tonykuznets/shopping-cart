import React from 'react';

import ErrorMessage from './ErrorMessage';

interface HocProps {}

interface HocState {}

class ErrorBoundary extends React.Component<HocProps, HocState> {
  state = {
    error: null,
  };

  componentDidCatch(error: Error | null) {
    this.setState({ error });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

    return children;
  }
}

export default ErrorBoundary;
