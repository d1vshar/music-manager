import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content }) => (
  <span className="sm:ml-3">
    <button
      type="button"
      className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-spec-green hover:bg-spec-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spec-green"
    >
      {content}
    </button>
  </span>
);

Button.propTypes = {
  content: PropTypes.any.isRequired,
};

export default Button;
