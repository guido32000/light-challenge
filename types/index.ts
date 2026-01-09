import { ReactElement } from "react";

export type Method = "get" | "GET";

export type Headers = {
  "Content-Type": string;
  "Access-Control-Allow-Origin": string;
  "Cache-Control": string;
  Pragma: string;
};

export type ResponseType =
  | "arraybuffer"
  | "blob"
  | "document"
  | "json"
  | "text";

export type Options = {
  data?: object;
  method?: Method;
  headers?: object;
  params?: object;
  responseType?: ResponseType;
};

export type ButtonProps = {
  disabled?: boolean;
  text: string | ReactElement;
  onClick?: () => void;
};

export type Patient = {
  avatar: string;
  createdAt: string;
  description: string;
  id: string;
  name: string;
  website: string;
};

export type DrawerEventProps = {
  visible: boolean;
  onCancel?: () => Promise<void> | void;
  children: ReactElement;
};

export type PropsDrawerReservation = {
  visible: boolean;
  setOpenDrawer: (value: boolean) => void;
  patient: Patient | null;
};

export type ModalProps = {
  visible: boolean;
  title: string;
  ctaText: string;
  onCancel: () => any;
  onConfirm: () => any;
  children: ReactElement;
  canSend: boolean;
};

export type InputProps = {
  As?: "input" | "textarea";
  label: string;
  register: any;
  placeholder: string;
  required: boolean;
  helperText?: string;
};
