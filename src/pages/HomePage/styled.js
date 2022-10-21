import styled from "styled-components";

export const ContainerHomePage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35vh;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 20vh;
    justify-content: center;
    align-items: center;
  }
`;
