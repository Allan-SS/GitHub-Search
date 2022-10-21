import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerError = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem;

  @media screen and (max-width: 425px) {
    padding: 0;
  }
`;

export const TitleH1 = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  color: ${primaryColor};
  filter: drop-shadow(0.15rem 0.25rem 0.5rem rgba(0, 0, 0, 0.7));

  cursor: pointer;

  ::selection {
    background-color: ${primaryColor};
    color: ${secondaryColor};
  }

  @media screen and (max-width: 425px) {
    font-size: 3rem;
  }
`;

export const Error = styled.span`
  font-size: 7rem;

  font-weight: 100;
  font-style: italic;
  color: ${secondaryColor};
  filter: drop-shadow(0.15rem 0.25rem 0.5rem rgba(0, 0, 0, 0.7));

  ::selection {
    background-color: ${primaryColor};
    color: ${secondaryColor};
  }

  @media screen and (max-width: 425px) {
    font-size: 3rem;
  }
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 1.5rem 0;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
  }
`;
