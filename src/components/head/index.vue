<template>
  <div class="homes" @click="fistPlay">
    <div class="left">
      <div>
        <img class="im" src="@/assets/logo.png" alt @click="$router.go(0)" />
      </div>
      <template v-for="item in listTitle" :key="item.path">
        <div :class="zhong(item.meta.title)" @click="choose(item)">
          <div style="text-align: center; margin: 10px">
            <img
              :src="
                K === item.name
                  ? require(`@/assets/${item.meta.iocn}1.png`)
                  : require(`@/assets/${item.meta.iocn}.png`)
              "
              :alt="item.meta.iocn"
              class="imgs"
            />
          </div>
          <div style="text-align: center">{{ item.name }}</div>
        </div>
      </template>
    </div>

    <div class="title">vue3+TS+ant</div>

    <div class="right">
      <div>
        <img
          style="margin-right: 20px"
          src="@/assets/fu.png"
          class="imgs"
          alt="报警"
          @click="clears"
        />
        <img
          :src="src"
          style="margin-right: 30px"
          alt="报警"
          class="imgs"
          @click="clear"
        />
      </div>

      <span class="time"> {{ date }} {{ time }}</span>
      <div class="pol" v-if="policeNum > 0">({{ policeNum }})</div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserSwitchOutlined } from "@ant-design/icons-vue";

import {
  defineComponent,
  toRefs,
  reactive,
  ref,
  computed,
  watch,
  onMounted,
  watchEffect,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { Rotations } from "@/hooks/index";
import { useStore } from "vuex";
import { time } from "@/hooks/index";
import { pol } from "@/api/article";
import { message } from "ant-design-vue";
export default defineComponent({
  components: {
    UserSwitchOutlined,
  },
  data() {
    return {
      title: "海水养殖系统",
    };
  },

  setup() {
    const store = useStore();
    // 获取时间
    const { timeState } = time();
    let routers = {};
    let a: any;
    a = localStorage.getItem("router");
    routers = JSON.parse(a);
    let state = reactive({
      listTitle: routers,
    });
    const police = reactive({
      policeName: "",
      policeNum: 0,
      open: false,
      num: 0,
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
      police.policeNum > 0
        ? require("@/assets/bao1.png")
        : require("@/assets/bao.png");
    });

    watch(
      () => route.name,
      (a, b) => {
        K.value = a;
      }
    );
    const choose = (val: any) => {
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
    // 轮训获取报警条数
    const history = async () => {
      const res: any = await pol();
      // 根据报警信息来判读未读的报警条数
      if (res.alarm.data) {
        if (res.alarm.data.name !== police.policeName) {
          police.policeName = res.alarm.data.name;
          police.policeNum = police.policeNum + 1;
          play();
          store.commit("setTwinkle", true);
        }
      }
      police.num = res.alarm.num;
    };
    const clear = () => {
      if (police.policeNum > 0) {
        pause();
        store.commit("setTwinkle", false);
      } else {
        if (police.num > 0) {
          police.policeNum = police.num;
        }
        message.warning("暂无报警,请勿消音");
      }
    };
    const clears = () => {
      pause();
      if (police.num > 0) {
        police.policeNum = police.num;
        message.warning(`还有${police.num}条报警未处理`);
      } else {
        message.success("复位成功");
        police.policeNum = 0;
        police.policeName = "";
      }
    };
    const fistPlay = () => {
      if (!police.open) {
        play();
        pause();
        // getList();
        police.open = true;
      }
    };
    // 页面重启
    const { getList } = Rotations(history);

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
      clears,
    };
  },
});
</script>

<style lang="less" scoped>
.homes {
  display: flex;
}

.im {
  margin-left: 15px;
  height: 50px;
  width: 100px;
  margin-right: 15px;
}

.left {
  display: flex;
  height: 1rem;
  align-items: center;
  color: #000;
  z-index: 1;
}

.bit {
  width: 1.2rem;
  height: 1rem;
  border: 1px solid #ccc;
  margin: 0 auto;
  border: 1px solid #00b3f5;
  border-top: none;
  border-bottom: none;
  color: #00b3f5 !important;
}

.box {
  width: 1.2rem;
  border: 1px solid #ccc;
  border-top: none;
  border-bottom: none;
  margin: 0 auto;
  height: 1rem;
  // bordesr: 1px solid #ccc;
  color: #000 !important;
}

.time {
  font-size: 0.3rem;
  margin-left: 10px;
  color: #2c78d4;
}

.right {
  height: 1rem;
  display: flex;
  line-height: 1rem;
  margin-left: 6rem;
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

.imgs {
  max-height: 0.5rem;
  max-width: 0.5rem;
}

.title {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 0.5rem;
  z-index: 0;
  height: 1rem;
  line-height: 1rem;
  // letter-spacing: 15px;
  color: #436894;
  font-weight: 700;
}
</style>
