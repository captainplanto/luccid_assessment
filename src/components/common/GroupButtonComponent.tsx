"use client";
import { ButtonComponent } from "@/components/common/ButtonComponent";
import styled from "styled-components";

export const GroupButtonComponent = ({
  handleSubmit,
  type,
}: {
  handleSubmit: () => void;
  type: "button" | "reset" | "submit";
}) => {
  return (
    <ButtonGroup>
      <ButtonComponent showbg onsubmit={handleSubmit} type={type}>
        Sign Up
      </ButtonComponent>
      <ButtonComponent showbg={false} type={type}>
        Log In
      </ButtonComponent>
    </ButtonGroup>
  );
};

const ButtonGroup = styled.div`
  margin-top: 2rem;
  > :first-child {
    margin-bottom: 1rem;
  }
`;
