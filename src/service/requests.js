import * as axios from "axios";
import BASE_URL from "../constants/url";

export const getProfile = async (userName) => {
  try {
    const response = await axios({
      method: "get",
      url: `${BASE_URL}/${userName}`,
    });
    return response.data;
  } catch (error) {
    return {
      error: true,
      data: error,
    };
  }
};

export const getRepos = async (userName) => {
  try {
    const response = await axios({
      method: "get",
      url: `${BASE_URL}/${userName}/repos`,
    });
    return response.data;
  } catch (error) {
    return {
      error: true,
      data: error,
    };
  }
};
