import axios from 'axios';

export function getProfileInfo(user){
  return axios.get(`/api/profileinfo/${user}`);
}

export function getPostCount(userId){
  return axios.get(`/api/postcount/${userId}`);
}
