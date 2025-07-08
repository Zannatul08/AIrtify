import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://192.168.0.101:1337/api',
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
  },
  timeout: 30000,
});

const GetUserInfo = (email) => axiosClient.get(`/user-lists?filters[userEmail][$eq]=${email}`);
const CreateNewUser = (data) => axiosClient.post('/user-lists', { data });

const GetFeaturedCategoryList=()=>axiosClient.get('/ai-models?filters[isFeatured][$eq]=true&populate=*');

export default {
  GetUserInfo,
  CreateNewUser,
  GetFeaturedCategoryList
};