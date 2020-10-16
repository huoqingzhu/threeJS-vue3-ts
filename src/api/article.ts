import request from "@/utils/request.ts";

// 文章列表
export function article() {
  return request({
    url: "/profile ",
    method: "get"
  });
}
// 请求数据data/main
export function getData(ids:string) {
  return request({
    url: "/data/get",
    params: { id: ids },
    method: "get",
  });
}