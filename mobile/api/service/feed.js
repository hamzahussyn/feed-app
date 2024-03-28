const serviceUrl = "feed";
import { get, post } from "../client/apiClient";

export const createFeedPost = (data) => {
  const res = post(serviceUrl, data, { "Content-Type": "multipart/form-data" });
  return res;
};

export const fetchFeedPosts = async () => {
    const res = await get(serviceUrl);
    return res;
}