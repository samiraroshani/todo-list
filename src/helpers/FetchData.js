import axios from 'axios';
import {getData} from './Storage';

export const URLApp = "https://jsonplaceholder.typicode.com/";

let token = null;
getData('token').then((res) => (token = res));

const FetchData = (type, url, method, params, body) => {
  const Url = URLApp + url;
  console.log({Url})
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      Accept: 'application/json',
    },
  };
  switch (type) {
    case 'allFetch':
      return axios({
        url: Url,
        method: method,
        params: body ? null : params,
        data: body,
        config,
      });

    case 'notToken':
      return axios({
        url: Url,
        method: method,
        params: params,
        notToken: true,
        headers: {
          Accept: 'application/json',
        },
      });
  }
};

export default FetchData;
