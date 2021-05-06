import React from 'react';

const Button = (props) => {
  const { content } = props;
  return (
    <span className="sm:ml-3">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-spec-green hover:bg-spec-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spec-green"
      >
        {content}
      </button>
    </span>
  );
};

Button.prototypes = {
  content: React.prototypes.object,
};

export default Button;
