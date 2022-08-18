import instance from "./axios";

const fetchTweets = async (url: string) => {
  try {
    const response = await instance(url);
    const { tweets } = await response.data;
    return tweets;
  } catch (error) {
    return error;
  }
};

export default fetchTweets;
