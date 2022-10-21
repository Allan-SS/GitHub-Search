import styled from "styled-components";
import { secondaryColor } from "../../constants/colors";

export const ContainerListPage = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerProfile = styled.div`
  margin: 0 1.25rem;
  color: ${secondaryColor};

  @media screen and (max-width: 768px) {
    margin: 0 0 0 1rem;
  }
`;

export const ContainerDescription = styled.div`
  width: 17.5rem;

  @media screen and (max-width: 768px) {
    width: 13rem;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 4rem;

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

export const About = styled.p`
  font-size: 1rem;
  margin: 0.625rem 0;
`;

export const Img = styled.img`
  width: 17.5rem;
  border-radius: 0.313rem;

  @media screen and (max-width: 768px) and (min-width: 425px) {
    width: 13rem;
  }
`;

export const Icons = styled.div`
  margin: 0.625rem 0;
  display: flex;
`;

export const ImgIcons = styled.img`
  margin-right: 0.625rem;
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
