import axios from "axios";

export const fetchData = async (url: string, token: string) => {
  const data = await axios.get(url, {
    headers: {
      token,
    },
  });

  return data;
};
