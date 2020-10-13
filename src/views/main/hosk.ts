import { reactive } from "vue";
import { article } from "@/api/article";

const mapHosk = (): any => {
  const state: any = reactive({
    listData: []
  });
  const getDate = () => {
    article().then(res => {
      state.listData = res;
    });
  };

  return {
    state,
    getDate
  };
};
export { mapHosk };
