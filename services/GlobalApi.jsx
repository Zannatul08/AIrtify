import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://192.168.0.100:1337/api',
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
  },
});

const GetUserInfo = (email) => axiosClient.get(`/user-lists?filters[userEmail][$eq]=${email}`);
const CreateNewUser = (data) => axiosClient.post('/user-lists', { data });

export default {
  GetUserInfo,
  CreateNewUser,
};