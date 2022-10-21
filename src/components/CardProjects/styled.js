import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerCard = styled.div`
  width: 50rem;
  margin-bottom: 1.25rem;
  padding: 0.625rem;
  border-radius: 0.188rem;
  box-shadow: 0.15rem 0.25rem 1rem rgba(0, 0, 0, 0.7);
  background-color: ${secondaryColor};
  transition: transform 300ms ease-in-out;

  :hover {
    transform: scale(1.01);
  }

  @media screen and (max-width: 425px) {
    width: 18rem;
  }

  @media screen and (max-width: 768px) and (min-width: 425px) {
    width: 25rem;
  }
`;

export const TitleA = styled.a`
  width: 20rem;
  margin-bottom: 0.625rem;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${primaryColor};
  cursor: pointer;

  ::selection {
    color: ${secondaryColor};
    background-color: ${primaryColor};
  }

  :hover {
    color: #7440ac;
    transition: color 400ms ease-in-out;
  }

  span {
    font-weight: 100;
    font-style: italic;
    color: ${secondaryColor};

    ::selection {
      color: ${secondaryColor};
      background-color: ${primaryColor};
    }
  }

  @media screen and (max-width: 425px) {
    width: 13rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) and (min-width: 425px) {
    width: 15rem;
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  margin-bottom: 0.625rem;
  background-color: ${secondaryColor};

  @media screen and (max-width: 768px) and (min-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
`;

export const ImgIcons = styled.img`
  margin-right: 0.625rem;

  @media screen and (max-width: 768px) and (min-width: 425px) {
    width: 1rem;
  }
`;
