import { PlayIcon } from '@heroicons/react/outline';
import React from 'react';
import Button from './Button';

const PlayButton = () => (
  <Button
    content={(
      <>
        <PlayIcon className="-ml-1 mr-2 h-6 w-6" aria-hidden="true" />
        <p className="text-sm">Play</p>
      </>
      )}
  />
);

export default PlayButton;
