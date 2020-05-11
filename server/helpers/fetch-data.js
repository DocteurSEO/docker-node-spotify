const axios = require('axios');

const fetchData = async (url, token) => {
  const data = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
module.exports = fetchData;
