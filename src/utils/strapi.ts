/** @format */

import Strapi from 'strapi-sdk-js';

const strapi = new Strapi({
  url: 'https://ksn-strapi-production.up.railway.app',
  prefix: '/api',
  store: {
    key: 'strapi_jwt',
    useLocalStorage: false,
    cookieOptions: { path: '/' },
  },
  axiosOptions: {},
});

strapi.axios.defaults.headers.common['Authorization'] =
  process.env.NEXT_PUBLIC_STRAPI_TOKEN || '';
const populate = ['*', 'Preview_Image', 'Images', 'agent', 'agent.Profile'];
export default strapi;
export { populate };
