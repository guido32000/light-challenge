import { useState } from "react";
import { NextPage } from "next";
import { DialogPanel } from "@headlessui/react";
import Image from "next/image";
import Default from "../public/static/img/default.jpg";
import Drawer from "./common/Drawer";
import { PropsDrawerReservation } from "@/types";
import { XIcon } from "@heroicons/react/solid";
import { format } from "date-fns";

const DrawerPatient: NextPage<PropsDrawerReservation> = ({
  visible,
  setOpenDrawer,
  patient,
}) => {
  const [canRender, setCanRender] = useState<boolean>(true);

  const isValidUrl = (url: string) => {
    return /^(https?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!$&'()*+,;=.]+$/.test(
      url
    );
  };

  const showImage =
    !!patient?.avatar && isValidUrl(patient.avatar) && canRender;

  return (
    <>
      <Drawer visible={visible} onCancel={() => setOpenDrawer(false)}>
        <DialogPanel className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl pointer-events-auto w-screen max-w-[666px]">
          <div className="bg-primary h-18 text-blue py-3 pl-4 flex justify-between">
            <div className="flex items-center">
              <div className="h-[61px] w-[61px] rounded-md flex items-center justify-center">
                <Image
                  className="rounded"
                  height={50}
                  width={50}
                  src={showImage ? patient.avatar : Default}
                  alt={patient?.name || "Avatar"}
                  onLoad={() => setCanRender(true)}
                  onError={() => setCanRender(false)}
                />
              </div>
              <div className="text-xl font-semibold text-white ml-4 tracking-wider">
                {patient?.name}
              </div>
            </div>
            <div test-id="close-btn" className="mr-3 flex h-7">
              <button
                aria-label="button-cancel"
                type="button"
                className="text-white hover:text-indigo-200 focus:outline-none cursor-pointer"
                onClick={() => setOpenDrawer(false)}
              >
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="tracking-wider">
            <div className="flex space-y-4 flex-col text-sm font-medium text-neutro-dark-grey p-6">
              <div>
                <span className="font-semibold">Descripción:</span>{" "}
                {patient?.description}
              </div>
              <div>
                <span className="font-semibold">Sitio web:</span>{" "}
                {patient?.website}
              </div>
              {patient?.createdAt && (
                <div>
                  <span className="font-semibold">Fecha de registro:</span>{" "}
                  {format(patient.createdAt, "dd/MM/yyyy")}
                </div>
              )}
            </div>
          </div>
        </DialogPanel>
      </Drawer>
    </>
  );
};

export default DrawerPatient;
