"use client";
import { IHeaderProps } from "@/types/type";
import styled from "styled-components";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

type HeaderType = Omit<IHeaderProps, "sub_title" | "info">;

export const HeaderComponent = ({ logo, title }: HeaderType) => {
  return (
    <OuterContainer>
      <div className="inner_div">
        <Image
          width={150}
          height={40}
          src={logo}
          alt="luccid_logo"
          as={NextImage}
        />
        <div className="text__heading">
          <span>{title}</span>
        </div>
      </div>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  background: var(--white-text-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  .inner_div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem;
    .text__heading {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      span {
        color: var(--header-text);
        font-weight: 500;
        margin-right: 7rem;
      }
      @media screen and (max-width: 600px) {
        span {
          text-align: center;
          font-size: 1rem;
          margin-right: 0;
        }
      }
    }
  }
`;
