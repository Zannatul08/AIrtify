import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://192.168.0.103:1337/api',
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
  },
  timeout: 30000,
});

const GetUserInfo = (email) => axiosClient.get(`/user-lists?filters[userEmail][$eq]=${email}`);
const CreateNewUser = (data) => axiosClient.post('/user-lists', { data });

const GetFeaturedCategoryList=()=>axiosClient.get('/ai-models?filters[isFeatured][$eq]=true&populate=*');

const GetAiModels=(type)=>axiosClient.get('/ai-models?filters['+type+'][$eq]=true&populate=*') 

const AIGenerateImage=(data)=>axios.post('http://192.168.0.103:8081/aimodel',data);

export default {
  GetUserInfo,
  CreateNewUser,
  GetFeaturedCategoryList,
  GetAiModels,
  AIGenerateImage
};