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
// 报警数量及报警信息
// 报警
export function pol() {
  return request({
    url: "/timer/sec",
    method: "get",
  });
}
// /history/num
export function historys(params:any) {
  return request({
    url: "/history/num",
    method: "get",
    params
  });
}
// /alarm/search
export function police(params:any) {
  return request({
    url: "/alarm/search",
    method: "get",
    params
  });
}