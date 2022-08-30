import Cookies from "js-cookie"
const TokenKey = "token"
// 获取token的方法
export function getToken() {
  Cookies.get(TokenKey)
}

// 设置token
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

// 删除cookie里面的token
export function removetoken() {
  Cookies.remove(TokenKey)
}

// export { setToken, removetoken }
