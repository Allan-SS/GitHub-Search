import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const states = { searchText, errorMessage, user, repos };
  const setters = { setSearchText, setErrorMessage, setUser, setRepos };

  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
