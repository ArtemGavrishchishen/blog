import axios from 'axios';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

const getPostById = async id => {
  const response = await axios.get(`/posts/${id}?_embed=comments`);
  return response.data;
};

export default getPostById;
