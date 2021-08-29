/* eslint-disable no-shadow */
import React from 'react';
import { Popover } from '@headlessui/react';
import {
  MusicNoteIcon,
  CollectionIcon,
  FolderIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

import Queue from './queue/Queue';
import Logo from './Logo';
import ManageDropdown from './ManageDropdown';

const links = [
  {
    name: 'Songs',
    description: 'Add, edit or delte songs from library.',
    href: '/manage/songs',
    icon: MusicNoteIcon,
  },
  {
    name: 'Playlists',
    description: 'Add, edit or delete songs from self curated playlists.',
    href: '/manage/playlists',
    icon: CollectionIcon,
  },
  {
    name: 'Artists',
    description: 'Add, edit or delete artists.',
    href: '/manage/artists',
    icon: UsersIcon,
  },
  {
    name: 'Genres',
    description: 'Add, edit or delete genres.',
    href: '/manage/genres',
    icon: FolderIcon,
  },
];

const NavBar = () => (
  <Popover className="bg-dark navbar sticky top-0">
    {() => (
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-5 md:justify-start md:space-x-1">
            <Logo />
            <Queue />
            <Popover.Group as="nav" className="md:flex space-x-10 items-center justify-end md:flex-1 lg:w-0">
              <Link
                to="/"
                className="nav-link text-base font-medium hover:text-gray"
              >
                Home
              </Link>
              <ManageDropdown links={links} />
            </Popover.Group>
          </div>
        </div>
      </>
    )}
  </Popover>
);

export default NavBar;
