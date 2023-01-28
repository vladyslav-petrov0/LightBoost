import ReactDOM from 'react-dom';
import { bool, element, node, oneOfType, object } from 'prop-types';

const Portal = ({ isOpen, children, to }) => {
  return isOpen ? ReactDOM.createPortal(children, to) : children;
};

Portal.propTypes = {
  isOpen: bool.isRequired,
  children: element.isRequired,
  to: oneOfType([object, node]).isRequired
};

Portal.defaultProps = {
  isOpen: true
};

export default Portal;
