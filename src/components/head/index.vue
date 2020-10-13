<template>
<div class="center">
  <div class="center ft hiddens">
    <img class="im" src="@/assets/qiyao.png" alt />
    <div>啦啦啦,德玛西亚</div>
  </div>
  <meau></meau>
  <div class="center">
    <UserSwitchOutlined :style="{ fontSize: '30px', color: '#08c' }" />
  </div>
</div>
</template>

<script lang="ts">
import {
  UserSwitchOutlined
} from "@ant-design/icons-vue";
import meau from "./Header2.vue";

import {
  useRouter
} from "vue-router";
import {
  defineComponent
} from "vue";
export default defineComponent({
  components: {
    meau,
    UserSwitchOutlined
  },
  setup() {
    const router = useRouter();
    const userChange = () => {
      router
        .push({
          name: "Login"
        })
        .catch(() => {});
    };
    return {};
  }
});
</script>

<style lang="less" scoped>
.im {
  height: 50px;
  margin: 0 0.1rem;
}

.ft {
  width: 16%;
  min-width: 80px;
  font-size: 18px;
}
</style>
