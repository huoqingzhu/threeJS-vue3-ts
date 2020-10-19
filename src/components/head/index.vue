<template>
<div class="homes">
  <div class="left">
    <template v-for="item in listTitle" :key="item.path">
      <div :class="zhong(item.meta.title)" @click="choose(item)">
        <div style=" text-align: center;margin:15px">
          <img :src="require(`@/assets/${item.meta.iocn}.png`)" :alt="item.meta.iocn" />
        </div>
        <div style=" text-align: center;">{{ item.name }}</div>
      </div>
    </template>
  </div>
  <div>
    <img class="im" src="@/assets/qiyao.png" alt />
  </div>
  <div class="title">{{ K }}</div>
  <div>
    <div class="right">
      <img style="margin-right:20px" src="@/assets/fu.png" alt="报警" />
      <img src="@/assets/bao1.png" alt="报警" />
      <span class="time"> {{ date }} {{ time }}</span>
    </div>
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
  watch,
  onMounted
} from "vue";
import {
  useRouter,
  useRoute
} from "vue-router";
import {
  Rotations
} from "@/hooks/index";
import {
  useStore
} from "vuex";
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
    let state = reactive({
      listTitle: routers
    });
    const router = useRouter();
    const route = reactive(useRoute());
    const K = ref(route.name);
    const zhong = computed(() => {
      return (val: any) => {
        if (val === K.value) return "bit";
        return "box";
      };
    });

    watch(
      () => route.name,
      (a, b) => {
        K.value = a;
      }
    );
    const choose = (val: any) => {
      console.log(state.listTitle);
      router.push(val.path).catch(() => {});
    };

    return {
      ...toRefs(timeState),
      ...toRefs(state),
      choose,
      zhong,
      K
    };
  }
});
</script>

<style lang="less" scoped>
.homes {
  display: flex;
}

.im {
  height: 100px;
  line-height: 100px;
  padding: 20px 0;
  width: 240px;
}

.left {
  display: flex;
  height: 100px;
  align-items: center;
  color: #000;
  z-index: 1;
}

// .tit {
//   position: absolute;
//   width: 100%;
//   height: 100px;
//   margin-top: -100px;
//   text-align: center;
//   font-size: 48px;
//   color: #fff;
// }

.bit {
  width: 140px;
  // border: 1px solid #ccc;
  color: #00b3f5 !important;
}

.time {
  font-size: 36px;
  margin-left: 10px;
  color: #2c78d4;
}

.box {
  width: 140px;
  // border: 1px solid #ccc;
  color: #000 !important;
}

.right {
  height: 100px;
  line-height: 100px;
  margin-left: 650px;
}

.title {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 50px;
  z-index: 0;
  height: 100px;
  line-height: 100px;
  letter-spacing: 15px;
  color: #436894;
}
</style>
