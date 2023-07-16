import config from './config';
import realApi from './realApi';
import mockApi from './mockApi';

const api = config.useMockAPI ? mockApi : realApi;

export default api;
