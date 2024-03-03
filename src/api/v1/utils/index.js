'use strict';

const axios = require('axios');
const DecodeService = require('../services/decode.service');

const getCookie = async () => {
  try {
    const res = await axios.get(`${process.env.ZING_URL}`);
    return res.headers['set-cookie'][1];
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

const requestZingMp3 = async (path, id = null) => {
  try {
    const ctime = String(Math.floor(Date.now() / 1000))
    const cookie = await getCookie();

    const client = axios.create({
      baseURL: `${process.env.ZING_URL}`,
    });

    client.interceptors.response.use((res) => res.data);
    return id
      ? await client.get(path, {
        headers: {
          Cookie: `${cookie}`,
        },
        params: {
          id: id,
          ctime: ctime,
          version: process.env.ZING_VERSION,
          sig: DecodeService.hashParam(path, ctime, id),
          apiKey: process.env.ZING_API_KEY
        }
      }) 
      : await client.get(path, {
        headers: {
          Cookie: `${cookie}`,
        },
        params: {
          ctime: ctime,
          version: process.env.ZING_VERSION,
          sig: DecodeService.hashParamNoId(path, ctime),
          apiKey: process.env.ZING_API_KEY
        }
      }) 
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

module.exports = {
  requestZingMp3,
}
