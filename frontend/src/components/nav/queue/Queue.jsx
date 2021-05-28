import { Popover, Transition } from '@headlessui/react';
import { ChevronDoubleDownIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import classNames from '../../../util';
import QueueHeading from './QueueHeading';
import QueueTable from './QueueTable';

const Queue = () => {
  const queue = useSelector((state) => state.musicQueue.queue);

  return (
    <Popover.Group as="nav" className="md:flex space-x-10">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-darkgray' : 'text-white',
                'dropdown group rounded-md inline-flex items-center text-base font-medium hover:text-darkgray',
              )}
            >
              <ChevronDoubleDownIcon
                className={classNames(
                  open ? 'text-darkgray' : 'text-white',
                  'h-5 w-5 group-hover:text-darkgray',
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-3xl sm:px-0"
              >
                <div className="dropdown-panel overflow-hidden">
                  <div className="relative grid gap-6 bg-dark px-5 sm:gap-8 sm:p-8">
                    <QueueHeading length={queue.length} />
                    <QueueTable queue={queue} />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover.Group>
  );
};

export default Queue;
