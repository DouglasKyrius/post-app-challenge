import axios from "axios";

export const baseURL = "https://jsonplaceholder.typicode.com";
export const postsURL = `${baseURL}/posts`;

export const getOnePost = async (id) => {
  const result = await axios.get(`${postsURL}/${id}`).then(({ data }) => data);

  return result;
};

export const getAllPosts = async () => {
  const result = await axios.get(postsURL).then(({ data }) => data);

  return result;
};
