import clsx from "clsx";
import { statusColor } from "./StatusColor";

const Toast = ({
  type,
  message,
  visible,
}: {
  type: string;
  message: string;
  visible: boolean;
}) => {
  const Svg = statusColor[type].svg;
  const clsxToast = clsx({
    "absolute flex p-3 lg:mr-4 z-50 mt-8 right-0 min-w-[320px] max-w-[520px] overflow-hidden rounded-lg shadow-md": true,
    [statusColor[type].bg]: true,
    hidden: !visible,
  });

  return (
    <div className={clsxToast} data-testid="toast">
      <div
        className={`flex items-start w-full ${statusColor[type].bg}`}
        data-testid="bg-color"
      >
        <div className="w-1/12">
          <Svg />
        </div>
        <p className="text-sm pl-2 text-white font-normal leading-6 w-9/10">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Toast;
