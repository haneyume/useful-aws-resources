import axios from 'axios';

export const handler = async (event: any): Promise<void> => {
  const method = event.method;
  const url = event.url;
  const data = event.data;
  const headers = event.headers;

  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
