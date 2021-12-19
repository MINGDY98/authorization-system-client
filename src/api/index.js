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

function fetchUserList() {
  return instance.get('userlist');
}

function authorizeUser(userData) {
  return instance.put('authorize', userData);
}

function sendAuthCode(userData) {
  return instance.post('authcode', userData);
}

function verifyAuthCode(userData) {
  return instance.post('verifycode', userData);
}

function findPwd(userData) {
  return instance.post('findpwd', userData);
}

export {
  registerUser,
  loginUser,
  fetchUserList,
  authorizeUser,
  sendAuthCode,
  verifyAuthCode,
  findPwd
};