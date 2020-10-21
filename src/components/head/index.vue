<template>
<div class="homes">
  <div class="left">
    <div>
      <img class="im" src="@/assets/qiyao.png" alt />
    </div>
    <template v-for="item in listTitle" :key="item.path">
      <div :class="zhong(item.meta.title)" @click="choose(item)">
        <div style=" text-align: center;margin:15px">
          <img :src="
                K === item.name
                  ? require(`@/assets/${item.meta.iocn}1.png`)
                  : require(`@/assets/${item.meta.iocn}.png`)
              " :alt="item.meta.iocn" />
        </div>
        <div style=" text-align: center;">{{ item.name }}</div>
      </div>
    </template>
  </div>

  <div class="title">中试船监测报警系统</div>

  <div class="right">
    <img style="margin-right:20px" src="@/assets/fu.png" alt="报警" />
    <img src="@/assets/bao.png" style="margin-right:20px" alt="报警" />
    <a href="http://localhost:81">
      <img src="@/assets/she.png" alt="报警" />
    </a>
    <span class="time"> {{ date }} {{ time }}</span>
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
import {
  pol
} from "@/api/article";
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
    // 获取时间
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
    //
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
    // 轮训获取报警条数
    const history = async () => {
      await pol();
    };
    const {
      getList
    } = Rotations(history);
    getList();
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

.bit {
  width: 120px;
  border: 1px solid #ccc;
  margin: 0 auto;

  border: 1px solid #00b3f5;
  border-top: none;
  border-bottom: none;
  color: #00b3f5 !important;
}

.time {
  font-size: 30px;
  margin-left: 10px;
  color: #2c78d4;
}

.box {
  width: 120px;
  border: 1px solid #ccc;
  border-top: none;
  border-bottom: none;
  margin: 0 auto;
  // bordesr: 1px solid #ccc;
  color: #000 !important;
}

.right {
  height: 100px;
  line-height: 100px;
  margin-left: 580px;
  z-index: 2;
}

.title {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 50px;
  z-index: 0;
  height: 100px;
  line-height: 100px;
  // letter-spacing: 15px;
  color: #436894;
  font-weight: 700;
}
</style>
