import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from '../../util';

const ManageDropdown = ({ links }) => (
  <Popover className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className={classNames(
            open ? 'text-darkgray' : 'text-white',
            'group rounded-md inline-flex items-center text-base font-medium hover:text-darkgray',
          )}
        >
          <span>Manage</span>
          <ChevronDownIcon
            className={classNames(
              open ? 'text-darkgray' : 'text-white',
              'ml-2 h-5 w-5 group-hover:text-darkgray',
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
            className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
          >
            <div className="dropdown-panel">
              <div className="relative grid gap-6 bg-dark p-5 sm:gap-8 sm:p-8">
                {links.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-m-3 p-3 flex items-start hover:text-darkgray"
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6"
                      aria-hidden="true"
                    />
                    <div className="ml-4">
                      <p className="text-base font-medium">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

ManageDropdown.propTypes = {
  links: PropTypes.array.isRequired,
};

export default ManageDropdown;
