import React, { useContext } from "react";
import SearchIcon from "../../assets/svg-icons/search-icon.png";
import { Link } from "react-router-dom";
import {
  Btn,
  ContainerTitle,
  ErrorP,
  Img,
  Input,
  Search,
  TitleH1,
} from "./styled.js";
import GlobalStateContext from "../../global/GlobalStateContext";

const Header = ({ onClick }) => {
  const { states, setters } = useContext(GlobalStateContext);

  const handleChange = (e) => {
    setters.setSearchText(e.target.value);
  };

  return (
    <>
      <ContainerTitle>
        <Link to="/">
          <TitleH1>
            GitHub <span>Search</span>
          </TitleH1>
        </Link>
      </ContainerTitle>
      <div>
        <Search>
          <Input
            type={"text"}
            onChange={handleChange}
            placeholder={"Search User . . ."}
          />
          <Btn onClick={() => onClick()}>
            <Img src={SearchIcon} alt={"Icon"} />
          </Btn>
        </Search>
        {states.errorMessage && <ErrorP>{states.errorMessage}</ErrorP>}
      </div>
    </>
  );
};

export default Header;
