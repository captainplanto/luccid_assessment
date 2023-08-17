import { HTMLInputTypeAttribute, ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  showbg: boolean;
  onsubmit?: () => void;
  type: "button" | "reset" | "submit";
}

export interface IHeaderProps {
  logo: string;
  title: string;
  sub_title: string;
  info: string;
}

export interface IInputProps {
  type: string;
  placeholder: string;
  value: string | number | undefined;
  name: string;
  onchange: (e: any) => void;
}

export interface IForm {
  companyName: string;
  representative: string;
  contactNumber: number | string;
  address: string;
  vatId: number | string;
  email: string;
  password: string;
}
