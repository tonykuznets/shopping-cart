import React from 'react';

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
      return <div>error</div>;
    }

    return children;
  }
}

export default ErrorBoundary;
