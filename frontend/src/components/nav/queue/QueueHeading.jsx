import React from 'react';
import PropTypes from 'prop-types';

const QueueHeading = ({ length }) => (
  <p className="m-1 mx-4 text-xl">
    Queue
    {length ? ` - ${length}` : ''}
  </p>
);

QueueHeading.propTypes = {
  length: PropTypes.number,
};

export default QueueHeading;
