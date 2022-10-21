import React, { useContext } from "react";
import { ContainerError, Error, NavBar, TitleH1 } from "./styled";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import validateOnlySpaces from "../../constants/regex";

const ErrorPage = () => {
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
    <div>
      <NavBar>
        <Header onClick={() => handleClick()} />
      </NavBar>
      <ContainerError>
        <TitleH1>User</TitleH1>
        <Error>Not Found </Error>
      </ContainerError>
    </div>
  );
};

export default ErrorPage;
