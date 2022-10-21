import styled from "styled-components";
import {
  neutralColor,
  primaryColor,
  secondaryColor,
} from "../../constants/colors";

export const ContainerTitle = styled.div`
  display: flex;

  @media screen and (max-width: 425px) {
    justify-content: center;
  }
`;

export const TitleH1 = styled.h1`
  display: flex;
  font-size: 4rem;
  font-weight: 600;
  color: ${primaryColor};
  cursor: pointer;

  span {
    font-weight: 100;
    font-style: italic;
    color: ${secondaryColor};

    ::selection {
      background-color: ${primaryColor};
      color: ${secondaryColor};
    }
  }

  ::selection {
    background-color: ${primaryColor};
    color: ${secondaryColor};
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.7rem;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Input = styled.input`
  width: 44.4rem;
  font-size: 1.7rem;
  padding: 0.7rem;
  color: ${secondaryColor};
  background-color: ${secondaryColor};
  box-shadow: 0.15rem 0.25rem 1rem rgba(0, 0, 0, 0.7);
  border: none;
  outline: none;

  :hover {
    background-color: ${neutralColor};
    transition: background-color 700ms ease-in-out;
  }

  :focus {
    background-color: ${neutralColor};
  }

  ::selection {
    background-color: ${primaryColor};
  }

  @media screen and (max-width: 425px) {
    width: 15rem;
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  @media screen and (max-width: 768px) and (min-width: 425px) {
    width: 18rem;
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;

export const Btn = styled.button`
  width: 6rem;
  padding: 0.688rem;
  background-color: ${primaryColor};
  border: none;
  border-radius: 0 0.313rem 0.313rem 0;
  box-shadow: 0.7rem 0.25rem 1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;

  :hover {
    background-color: #7440ac;
    transition: background-color 400ms ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 4rem;
    padding: 0.395rem;
  }
`;

export const Img = styled.img`
  width: 1.836rem;
  transition: transform 300ms ease-in-out;

  :hover {
    transform: scale(1.2);
  }
`;

export const ErrorP = styled.p`
  text-align: center;
  margin: 1rem 0;

  color: #cf0a0a;
`;
