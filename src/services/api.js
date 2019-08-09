import axios from 'axios';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const getPostById = async id => {
  const response = await axios.get(`/posts/${id}?_embed=comments`);
  return response.data;
};

export const addCommentPostById = async (id, comment) => {
  const newComment = { postId: id, body: comment, date: new Date() };
  const response = await axios.post(`/comments`, newComment);
  return response.data;
};

export default { getPostById, addCommentPostById };
