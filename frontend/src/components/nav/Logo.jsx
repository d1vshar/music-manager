import React from 'react';

const Logo = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <a href="/">
      <span className="sr-only">Workflow</span>
      <img
        className="h-8 w-auto sm:h-10"
        src={`${process.env.PUBLIC_URL}/logo512.svg`}
        alt=""
      />
    </a>
    <p className="m-1 mx-4 text-2xl">Music Manager</p>
  </div>
);

export default Logo;
