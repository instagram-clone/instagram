import axios from 'axios';

export function getProfileInfo(user){
  return axios.get(`/api/profileinfo/${user}`);
}

export function getPostCount(userId){
  return axios.get(`/api/postcount/${userId}`);
}

export function getProfiles(userIdArr){
  return axios.get(`/api/getprofiles?ids=${userIdArr.join(',')}`);
}

// export function followUser(user, targetUser){
//   return axios.put(`/api/followuser/${user}`, targetUser);
// }
