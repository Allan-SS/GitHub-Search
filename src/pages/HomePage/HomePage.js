import React, { useContext } from "react";
import { ContainerHomePage } from "./styled";
import validateOnlySpaces from "../../constants/regex";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { states, setters } = useContext(GlobalStateContext);

  const navigate = useNavigate();

  const handleClick = () => {
    if (states.searchText && !validateOnlySpaces.test(states.searchText)) {
      setters.setErrorMessage("");
      navigate({
        pathname: "/list",
      });
    } else {
      setters.setErrorMessage("Text Required");
    }
  };

  return (
    <ContainerHomePage>
      <Header onClick={() => handleClick()} />
    </ContainerHomePage>
  );
};

export default HomePage;
