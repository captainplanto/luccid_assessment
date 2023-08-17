"use client";
import { IButtonProps } from "@/types/type";
import { FC } from "react";
import styled from "styled-components";

export const ButtonComponent: FC<IButtonProps> = ({
  children,
  showbg,
  onsubmit,
  type,
}) => {
  return (
    <Button $showbg={showbg && showbg} onClick={onsubmit} type={type}>
      {children}
    </Button>
  );
};

const Button = styled.button<{ $showbg: boolean }>`
  text-align: center;
  padding: 1rem;
  border-radius: 2rem;
  padding: 1rem 4rem;
  width: 100%;
  cursor: pointer;
  color: ${(props) =>
    props.$showbg ? `var(--white-text-color)` : `var(--btn-border-color)`};
  background: ${(props) =>
    props.$showbg ? `var(--btn-background)` : "transparent"};
  border: 1px solid
    ${(props) => (!props.$showbg ? `var(--btn-border-color)` : "transparent")};
`;
