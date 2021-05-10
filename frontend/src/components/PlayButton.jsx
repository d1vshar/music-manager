import { PlayIcon } from '@heroicons/react/outline';
import React from 'react';
import Button from './Button';

const PlayButton = () => (
  <Button
    content={(
      <>
        <PlayIcon className="h-6 w-6" aria-hidden="true" />
      </>
      )}
  />
);

export default PlayButton;
