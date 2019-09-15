import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.logErrorToBackend(error, info);
  }

  logErrorToBackend = (error, info) => {
    console.log(error, info);
  };

  render() {
    let error = "";
    if (this.props.error) {
      error = this.props.error;
    } else if (this.state.hasError) {
      error = this.state.hasError;
    }
    if (error.length) {
      this.logErrorToBackend(error);
      return <span>Something went wrong. Please try again later</span>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
  error: PropTypes.string
};

export default ErrorBoundary;
