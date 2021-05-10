import { CollectionIcon } from '@heroicons/react/outline';
import React from 'react';
import Button from './Button';

const QueueButton = () => (
  <Button
    content={(
      <>
        <CollectionIcon className="h-6 w-6" aria-hidden="true" />
      </>
      )}
  />
);

export default QueueButton;
