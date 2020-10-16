<template>
<div class="center">
  <div>
    <img class="im" src="@/assets/qiyao.png" alt />
  </div>
  <div class="title">{{ K }}</div>
  <div class="center">
    <span class="time"> {{ date }} {{ time }}</span>
    <UserSwitchOutlined :style="{ fontSize: '30px', color: '#08c' }" />
  </div>
</div>
<div class="police">
  <template v-for="item in listTitle" :key="item.path">
    <a-button :class="zhong(item.meta.title)" @click="choose(item)">
      {{ item.name }}
    </a-button>
  </template>
  <div><img style="margin:0 20px" src="@/assets/bao.png" alt="报警" /></div>
  <div>
    <img style="margin-right:20px" src="@/assets/fu.png" alt="报警" />
  </div>
</div>
</template>

<script lang="ts">
import {
  UserSwitchOutlined
} from "@ant-design/icons-vue";

import {
  defineComponent,
  toRefs,
  reactive,
  ref,
  computed,
  watch
} from "vue";
import {
  useRouter,
  useRoute
} from "vue-router";
import {
  time
} from "@/hooks/index";
export default defineComponent({
  components: {
    UserSwitchOutlined
  },
  data() {
    return {
      title: "海水养殖系统"
    };
  },

  setup() {
    const {
      timeState
    } = time();
    let routers = {};
    let a: any;
    a = localStorage.getItem("router");
    routers = JSON.parse(a);
    const listTitle = reactive(routers);
    const router = useRouter();
    const route = reactive(useRoute());
    const K = ref(route.name);
    const zhong = computed(() => {
      return (val: any) => {
        if (val === K.value) return "bit";
      };
    });

    watch(
      () => route.name,
      a => {
        K.value = a;
      }
    );
    const choose = (val: any) => {
      router.push(val.path).catch(() => {});
    };
    return {
      ...toRefs(timeState),
      listTitle,
      choose,
      zhong,
      K
    };
  }
});
</script>

<style lang="less" scoped>
.im {
  height: 50px;
  line-height: 50px;
  margin: 0 0.1rem;
}

.title {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 50px;

  letter-spacing: 15px;
  color: #436894;
}

.time {
  font-size: 24px;
  margin-right: 40px;
  color: #2c78d4;
}

.police {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  color: #fff;

  button {
    margin-left: 10px;
    width: 160px;
    background-color: rgb(95, 93, 93);
    border: 0px;
    color: #fff;
    height: 40px;
    font-size: 20px;
  }
}

.bit {
  background-color: #00b3f5 !important;
}
</style>
