import React from "react";
import StarIcon from "../../assets/svg-icons/star-icon.svg";
import {
  ContainerCard,
  ContainerIcon,
  Description,
  ImgIcons,
  TitleA,
} from "./styled";

const CardProjects = ({ title, description, stars, link }) => {
  return (
    <ContainerCard>
      <TitleA href={link} target={"_blank"}>
        {title}
      </TitleA>
      <Description>{description}</Description>
      <ContainerIcon>
        <ImgIcons src={StarIcon} alt={"Icon"} />
        <p>{stars}</p>
      </ContainerIcon>
    </ContainerCard>
  );
};

export default CardProjects;
