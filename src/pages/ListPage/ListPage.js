import React, { useContext, useEffect } from "react";
import OrganizationIcon from "../../assets/svg-icons/organization-icon.svg";
import RepositorieIcon from "../../assets/svg-icons/repositorie-icon.svg";
import LocationIcon from "../../assets/svg-icons/location-icon.svg";
import FollowersIcon from "../../assets/svg-icons/followers-icon.png";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import CardProjects from "../../components/CardProjects/CardProjects";
import validateOnlySpaces from "../../constants/regex";
import {
  ContainerListPage,
  ContainerProfile,
  ContainerDescription,
  ContainerCards,
  Icons,
  Img,
  About,
  ImgIcons,
  NavBar,
} from "./styled";
import { getProfile, getRepos } from "../../service/requests";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const { states, setters } = useContext(GlobalStateContext);

  const repositories = states.repos;

  const navigate = useNavigate();

  const handleGetProfile = async () => {
    const profile = await getProfile(states.searchText);
    if (profile.error) {
      navigate("/*");
    }
    setters.setUser(profile);
  };

  const handleGetRepos = async () => {
    const repos = await getRepos(states.searchText);
    setters.setRepos(repos);
  };

  const handleClick = () => {
    if (states.searchText && !validateOnlySpaces.test(states.searchText)) {
      setters.setErrorMessage("");
      handleGetProfile();
      handleGetRepos();
    } else {
      setters.setErrorMessage("Text Required");
    }
  };

  useEffect(() => {
    if (states && states.searchText) {
      handleGetProfile();
      handleGetRepos();
    }
  }, []);

  return (
    <div>
      <NavBar>
        <Header onClick={() => handleClick()} />
      </NavBar>
      <ContainerListPage>
        {states && states.user && (
          <>
            <ContainerProfile>
              <Img src={states.user.avatar_url} key={"Avatar"} alt={"Perfil"} />
              <ContainerDescription>
                <h1>{states.user.name}</h1>
                <h3>{states.user.login}</h3>
                <About>{states.user.bio}</About>
              </ContainerDescription>
              <div>
                <Icons>
                  <ImgIcons src={OrganizationIcon} key={"Stars"} alt={"Icon"} />
                  <p>{states.repos.stargazers_count}</p>
                </Icons>
                <Icons>
                  <ImgIcons src={LocationIcon} key={"Location"} alt={"Icon"} />
                  <p>{states.user.location}</p>
                </Icons>
                <Icons>
                  <ImgIcons src={RepositorieIcon} key={"Repos"} alt={"Icon"} />
                  <p>{states.user.public_repos}</p>
                </Icons>
                <Icons>
                  <ImgIcons
                    src={FollowersIcon}
                    key={"Followers"}
                    alt={"Icon"}
                  />
                  <p>{states.user.followers}</p>
                </Icons>
              </div>
            </ContainerProfile>
            <ContainerCards>
              {repositories &&
                repositories.length > 0 &&
                repositories.map((repo) => (
                  <CardProjects
                    key={repo.name}
                    title={repo.name}
                    description={repo.description}
                    stars={repo.stargazers_count}
                    link={repo.html_url}
                  />
                ))}
            </ContainerCards>
          </>
        )}
      </ContainerListPage>
    </div>
  );
};

export default ListPage;
