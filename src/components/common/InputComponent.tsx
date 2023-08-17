"use client";

import { IInputProps } from "@/types/type";
import { FC } from "react";
import styled from "styled-components";

export const InputComponent: FC<IInputProps> = ({
  type,
  placeholder,
  value,
  onchange,
  name,
}) => {
  return (
    <Form>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        name={name}
        autoComplete="complete"
        className={name === "email" ? "input__style" : undefined}
      />
    </Form>
  );
};

const Form = styled.form`
  input {
    width: 100%;
    padding: 10px 0 10px 0;
    border: none;
    border-bottom: 1px solid var(--black-text-color);
    outline: none;
    background: transparent;
    font-size: 1.2rem;
    font-family: var(--font-family);
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }
  .input__style {
    margin-top: 2rem;
  }
`;
