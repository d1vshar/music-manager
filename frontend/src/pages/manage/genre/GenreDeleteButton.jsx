import { TrashIcon } from '@heroicons/react/outline';
import React from 'react';

const GenreDeleteButton = () => {
  const handleDelete = (e) => {
    e.preventDefault();
  };

  return (
    <span>
      <button
        type="button"
        className="button p-2 rounded-full shadow-sm text-sm bg-white text-black font-medium"
        onClick={handleDelete}
      >
        <div className="flex">
          <TrashIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
          <p className="px-1">Delete</p>
        </div>

      </button>
    </span>
  );
};

export default GenreDeleteButton;
