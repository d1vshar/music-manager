import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { ViewListIcon } from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';
import SongTable from '../../../components/songtable/SongTable';

const PlaylistDetailsButton = ({ playlistObj }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (e) => {
    e.preventDefault();

    setIsOpen(true);
  };

  return (
    <>
      <span>
        <button
          data={playlistObj}
          type="button"
          className="w-24 button p-1 rounded-full shadow-sm text-sm bg-white text-black font-medium"
          onClick={handleClick}
        >
          <ViewListIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
        </button>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="playlist-modal inline-block w-full max-w-7xl max-h-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-dark">
                  <div className="overflow-y-auto overflow-x-hidden max-h-96">
                    <SongTable title={playlistObj.name} data={playlistObj.songs} />
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </span>
    </>
  );
};

PlaylistDetailsButton.propTypes = {
  playlistObj: PropTypes.object.isRequired,
};

export default PlaylistDetailsButton;
