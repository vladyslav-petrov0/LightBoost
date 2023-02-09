import React from 'react';
import { element, oneOfType, bool, object } from 'prop-types';

class ErrorWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      const obj = { hasError: this.props.error ? true : false };
      this.setState(obj);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallbackComponent;
    }

    return this.props.children;
  }
}

ErrorWrapper.propTypes = {
  error: oneOfType([object, bool]).isRequired,
  children: element.isRequired,
  fallbackComponent: element.isRequired
};

export default ErrorWrapper;
