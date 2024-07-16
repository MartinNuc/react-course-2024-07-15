import React, { PropsWithChildren } from "react";

type State = {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundaryWithRetry extends React.Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  // optional
  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error(error, errorInfo);
  }

  retry() {
    this.setState({
      hasError: false,
      error: null
    });
  }

  render() {
    const {error, hasError} = this.state;
    if (hasError) {
      // fallback
      return <div>
        Error!
        <code>
          {String(error)}
        </code>
        <button onClick={() => this.retry()}>Retry</button>
      </div>;
    }

    return this.props.children; 
  }
}