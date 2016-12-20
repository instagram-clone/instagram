import axios from 'axios';

export function getProfileInfo(user){
  return axios.get(`http://localhost:3000/api/profileinfo/${user}`);
}
