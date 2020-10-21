<template>
<div class="homes" @click="fistPlay">
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
    <div>
      <img style="margin-right:20px" src="@/assets/fu.png" alt="报警" @click="clears" />
      <img :src="src" style="margin-right:20px" alt="报警" @click="clear" />
    </div>
    <a href="http://localhost:81">
      <img src="@/assets/she.png" alt="报警" />
    </a>
    <span class="time"> {{ date }} {{ time }}</span>
    <div class="pol" v-if="policeNum > 0">({{ policeNum }})</div>
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
  onMounted,
  watchEffect
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
import {
  message
} from "ant-design-vue";
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
    const police = reactive({
      policeName: "",
      policeNum: 3,
      open: false,
      num: 0
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
    const src = computed(() => {
      if (police.policeNum > 0) {
        return require("@/assets/bao1.png");
      } else {
        return require("@/assets/bao.png");
      }
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
    //  报警消音功能
    const audio: any = new Audio();
    audio.loop = "loop";
    audio.src = require("@/assets/bj.mp3");
    // 开始报警
    const play = () => {
      audio.play();
      console.log("开始报警");
    };
    // 消除报警
    const pause = () => {
      audio.pause();
      console.log("消除报警");
    };
    // 观察本地报警数量
    watch(
      () => police.policeNum,
      (a, b) => {
        if (a > 0) {
          play();
        } else {
          pause();
        }
      }
    );
    // 轮训获取报警条数
    const history = async () => {
      const res: any = await pol();
      // 根据报警信息来判读未读的报警条数
      if (res.alarm.data) {
        if (res.alarm.data.name !== police.policeName) {
          police.policeNum = police.policeNum + 1;
        }
      }
      police.num = res.alarm.num;
    };
    const clear = () => {
      if (police.policeNum > 0) {
        police.policeNum = 0;
      } else {
        message.warning("暂无报警,请勿消音");
      }
    };
    const clears = () => {
      if (police.num > 0) {
        message.warning("还有报警未处理");
      } else {
        message.success("复位成功");
      }
    };
    const fistPlay = () => {
      if (!police.open) {
        play();
        pause();
        police.open = true;
      }
    };
    onMounted(() => {});
    const {
      getList
    } = Rotations(history);
    getList();
    return {
      ...toRefs(police),
      ...toRefs(timeState),
      ...toRefs(state),
      choose,
      zhong,
      K,
      src,
      clear,
      fistPlay,
      clears
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
  display: flex;
  line-height: 100px;
  margin-left: 580px;
  z-index: 2;
  position: relative;
}

.pol {
  position: absolute;
  margin-left: 130px;
  font-size: 24px;
  color: red;
  margin-top: -20px;
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
