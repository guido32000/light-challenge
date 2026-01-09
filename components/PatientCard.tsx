import { Patient } from "@/types";
import { useState } from "react";
import Image from "next/image";
import Default from "../public/static/img/default.jpg";
import { PlusCircleIcon, PencilIcon } from "@heroicons/react/solid";

type Props = {
  patient: Patient;
  handleClickDrawer: () => void;
  handleClickModal: () => void;
};

const PatientCard = ({
  patient,
  handleClickDrawer,
  handleClickModal,
}: Props) => {
  const [canRender, setCanRender] = useState(true);

  const isValidUrl = (url: string) => {
    return /^(https?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!$&'()*+,;=.]+$/.test(
      url
    );
  };

  const showImage =
    !!patient?.avatar && isValidUrl(patient.avatar) && canRender;

  return (
    <div className="relative border rounded hover:bg-gray-100 shadow-sm border-light-grey">
      <div className="h-full text-center flex flex-col space-y-2 px-4 py-8 pb-12 justify-between items-center sm:space-y-0 sm:flex-row">
        <div className="text-xs text-dark-grey font-medium tracking-wider sm:text-lg">
          {patient?.name}
        </div>
        <div>
          <Image
            className="rounded"
            src={showImage ? patient.avatar : Default}
            alt={patient?.name}
            width={50}
            height={50}
            onError={() => setCanRender(false)}
          />
        </div>
      </div>
      <PencilIcon
        className="absolute bottom-2 right-[50%] sm:right-10 w-6 text-gray-500 cursor-pointer"
        onClick={handleClickModal}
      />
      <PlusCircleIcon
        className="absolute bottom-2 right-[25%] sm:right-2 w-6 text-gray-500 cursor-pointer"
        onClick={handleClickDrawer}
      />
    </div>
  );
};

export default PatientCard;
