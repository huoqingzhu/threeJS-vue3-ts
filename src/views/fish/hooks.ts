import {customRef} from "vue";

import {
  article
} from "@/api/article";
function myRef() {
  // customRef 有两个毁掉函数
  return customRef((track, trigger) => {
    return {
   async get() {
        track();
       const data = await article()
       console.log(data)
        return data
      },
      set(newValue) {
        trigger()
        return newValue
      },
    };
  });
}
const fish = (): any => {
 
  const listData=myRef()
  return {
    listData, 
  };
};
export { fish };
