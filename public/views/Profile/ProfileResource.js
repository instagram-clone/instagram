import axios from 'axios';

export function getProfileInfo(user){
  return axios.get(`/api/profileinfo/${user}`);
}
