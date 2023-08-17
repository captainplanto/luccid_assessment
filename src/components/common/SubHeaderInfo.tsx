"use client";
import styled from "styled-components";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { IHeaderProps } from "@/types/type";
import { FC } from "react";

export const SubHeaderInfo: FC<IHeaderProps> = ({
  logo,
  title,
  sub_title,
  info,
}) => {
  return (
    <OuterDiv>
      <h2>{title}</h2>
      <p>{sub_title}</p>
      <div className="image-container">
        <Image
          width={114}
          height={114}
          src={logo}
          alt="icon"
          as={NextImage}
        />
      </div>
      <span>{info}</span>
    </OuterDiv>
  );
};

const OuterDiv = styled.div`
  margin-top: 4rem;
  text-align: center;
  color: var(--black-text-color);
  p {
    margin-top: 0.5rem;
    font-weight: 500;
  }
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    cursor:pointer;
  }
  span {
    color: var(--grey-text);
    font-size:0.8rem;
  }
`;
