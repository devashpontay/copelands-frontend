import axios from "axios";

const BASE_URL = "http://192.168.254.154:8080/api/v1/elections";
const AUTH_URL = "http://192.168.254.154:8080/api/v1/auth";

// METHODS FOR REQUESTING DATA FROM OUR API

export const getAllElectionsByModerator = moderator =>
  axios.get(`${BASE_URL}/query`, {
    params: {
      moderator: moderator,
    },
  });

export const createElection = election => axios.post(BASE_URL, election);

export const login = user => axios.post(AUTH_URL + "/" + "login", user);
export const register = user => axios.post(AUTH_URL + "/" + "register", user);
export const getOneElection = idNo => axios.get(BASE_URL + '/' + idNo);
