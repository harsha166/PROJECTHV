import axios from 'axios';

export const getHeadline = async () => {
  try {
    const response = await axios.get("http://localhost:8100/newsfeeds");
    return response.data.headline;
  } catch (error) {
    console.error(error);
    return 'Error fetching headline';
  }
};
