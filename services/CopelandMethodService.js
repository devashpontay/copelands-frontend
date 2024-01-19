import axios from "axios";

const BASE_URL_ELECTION = "http://192.168.13.173:8080/api/v1/elections";
const BASE_URL_BALLOT = "http://192.168.13.173:8080/api/v1/ballots";
const AUTH_URL = "http://192.168.13.173:8080/api/v1/auth";

// METHODS FOR REQUESTING DATA FROM OUR API

export const getAllElectionsByModerator = (moderator) =>
  axios.get(`${BASE_URL}/query`, {
    params: {
      moderator: moderator,
    },
  });

export const getAllElectionsFromAllUsers = () => axios.get(BASE_URL_ELECTION);

export const createElection = (election) =>
  axios.post(BASE_URL_ELECTION, election);

export const login = (user) => axios.post(AUTH_URL + "/" + "login", user);
export const register = (user) => axios.post(AUTH_URL + "/" + "register", user);
export const getOneElection = (idNo) =>
  axios.get(BASE_URL_ELECTION + "/" + idNo);
export const isDoneVoting = (idNo, user) =>
  axios.get(`${BASE_URL_ELECTION}/${idNo}/votes/${user}`);
export const submitVote = (ballot) => axios.post(BASE_URL_BALLOT, ballot);
export const getWinner = (idNo) =>
  axios.get(`${BASE_URL_ELECTION}/${idNo}/winner`);
export const markAsClosed = (idNo) =>
  axios.patch(`${BASE_URL_ELECTION}/${idNo}/close`);
export const getAllVotesForElection = (idNo) =>
  axios.get(BASE_URL_ELECTION + "/" + idNo + "/" + "votes");
export const getVotesCount = (idNo) =>
  axios.get(`${BASE_URL_ELECTION}/${idNo}/votes/count`);
export const deleteElection = (idNo) =>
  axios.delete(`${BASE_URL_ELECTION}/${idNo}`);
