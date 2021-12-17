import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/',
  })
  return setInterceptors(instance);
}
const instance = createInstance();
//회원가입
function registerUser(userData) {
  return instance.post('signup', userData);
}
//로그인
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };