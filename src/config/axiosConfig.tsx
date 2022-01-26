import axios from 'axios';
const baseUrl = 'https://smartcard-staging.herokuapp.com/'


const axioConfig = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  },
})

export default axioConfig;