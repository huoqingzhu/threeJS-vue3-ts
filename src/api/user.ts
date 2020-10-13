import request from "@/utils/request";

export function login(data: string) {
  return request({
    url: "/users/login",
    method: "post",
    data
  });
}

export function getInfo(token: any) {
  return request({
    url: "/user/info",
    method: "get",
    params: { token }
  });
}

export function logout() {
  return request({
    url: "/user/logout",
    method: "post"
  });
}
