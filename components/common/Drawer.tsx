/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import { NextPage } from 'next';
import { DrawerEventProps } from '../../types/index';

const Drawer: NextPage<DrawerEventProps> = ({
  visible,
  onCancel = () => undefined,
  children,
}) => (
  <Transition show={visible} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={onCancel}>
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-12 sm:pl-16">
            <TransitionChild
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              {children}
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default Drawer;
