import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2. API 함수들을 정리
// ES6 Template String `${string}string`

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchCommentItem(userid) {
  return axios.get(`${config.baseUrl}item/${userid}.json`);
}

export {
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
}