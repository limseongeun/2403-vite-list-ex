import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2. API 함수들을 정리
// ES6 Template String `${string}string`

async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserInfo(username) {
  try {
    const response = await axios.get(`${config.baseUrl}user/${username}.json`);
    return response;
  } catch (error) {
    console.log(error);
  } 
}

async function fetchCommentItem(userid) {
  try {
    const response = await axios.get(`${config.baseUrl}item/${userid}.json`);
    return response;
  } catch (error) {
    console.log(error);
  } 
}

export {
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
}