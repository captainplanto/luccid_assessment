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
