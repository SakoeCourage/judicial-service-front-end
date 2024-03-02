'use strict';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import { AxiosError } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const Api = axios.create({
  baseURL: `${baseURL}/api/v1`,
});

Api.interceptors.request.use(async (config) => {
  const currentsession = await getSession()
  const sessionUser = currentsession?.user
  if (sessionUser) {
    config.headers["Authorization"] = `Bearer ${sessionUser.accessToken}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});



Api.interceptors.response.use(async (response) => {
  return response;

}, async (error: AxiosError) => {

  return Promise.reject(error);
});

export default Api;
