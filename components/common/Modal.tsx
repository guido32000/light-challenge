import { Fragment } from "react";
import Button from "./Button";
import { ModalProps } from "../../types/index";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";

const ModalGeneral = ({
  children,
  title,
  ctaText,
  visible,
  onConfirm,
  onCancel,
  canSend,
}: ModalProps) => {
  return (
    <Dialog open={visible} onClose={onCancel} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPanel className="max-w-lg space-y-4 bg-white rounded-lg shadow-lg w-full">
            <div className="sm:flex sm:items-start flex justify-between rounded-t-lg px-6 py-3 w-full text-left bg-primary">
              <DialogTitle
                as="h3"
                className="text-mds leading-6 font-medium text-white"
              >
                {title}
              </DialogTitle>
              <button
                type="button"
                test-id="close-modal"
                className="rounded-md text-white hover:text-gray-500 focus:outline-none"
                onClick={onCancel}
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={onConfirm}>
                {children}
                <div className="flex justify-center mt-8">
                  <Button text={ctaText} disabled={!canSend} />
                </div>
              </form>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  );
};

export default ModalGeneral;
