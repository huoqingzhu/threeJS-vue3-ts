import { reactive } from "vue";
import { article } from "@/api/article";

interface Data {
  listData: any;
  name: string;
}
const mapHosk = (): any => {
  const state: Data = reactive({
    listData: [],
    name: "请求数据"
  });

  const getDate = () => {
    state.name === "请求数据"
      ? article().then(res => {
          state.listData = res;
          state.name = "收起列表";
        })
      : ((state.listData = []), (state.name = "请求数据"));
  };

  return {
    state,
    getDate
  };
};
export { mapHosk };
