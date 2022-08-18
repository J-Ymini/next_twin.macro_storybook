import API_URLS from "src/api_config";
import instance from "./axios";

const fetchComments = async (tweetId: string) => {
  try {
    const response = await instance(`${API_URLS.comments}?tweetId=${tweetId}`);
    const { comments } = await response.data;
    return comments;
  } catch (error) {
    return error;
  }
};

export default fetchComments;
