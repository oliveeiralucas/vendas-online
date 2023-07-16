import axios from 'axios';
import { useState } from 'react';

import { connectionAPIPost } from '../functions/connection/connectionAPI';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'get',
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert('Erro');
      });
  };

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);

    const returnData = await connectionAPIPost(url, body)
      .then((result) => {
        return result;
      })
      .catch((error: Error) => {
        console.log(error);
      });

    setLoading(false);
    return returnData;
  };
  return {
    loading,
    getRequest,
    postRequest,
  };
};
