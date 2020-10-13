import request from "@/utils/request.ts";

// 文章列表
export function article() {
  return request({
    url: "/profile ",
    method: "get"
  });
}
