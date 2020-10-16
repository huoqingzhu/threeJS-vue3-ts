<template>
<div class="center">
  <div>
    <img class="im" src="@/assets/qiyao.png" alt />
  </div>
  <div class="title">{{ title }}</div>
  <div class="center">
    <span class="time"> {{ date }} {{ time }}</span>
    <UserSwitchOutlined :style="{ fontSize: '30px', color: '#08c' }" />
  </div>
</div>
<div class="police">
  <div class="dao">
    <a-button :style="style1" @click="change('海水养殖系统', '/home')">海水养殖系统</a-button>
    <a-button :style="style2" @click="change('吸鱼泵清污系统', '/fish')">吸鱼泵清污系统</a-button>
    <a-button :style="style3" @click="change('历史报警记录', '/table')">历史报警记录</a-button>
  </div>
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
  useRouter
} from "vue-router";
import {
  defineComponent,
  toRefs
} from "vue";
import {
  time
} from "@/hooks/index";
export default defineComponent({
  components: {
    UserSwitchOutlined
  },
  data() {
    return {
      title: "海水养殖系统",
      style1: {},
      style2: {},
      style3: {}
    };
  },
  watch: {
    title: {
      immediate: true,
      // 数据发生变化就会调用这个函数
      handler(newVal, oldVal) {
        if (newVal === "海水养殖系统") {
          this.style1 = {
            backgroundColor: "#00b3f5"
          };
          this.style2 = {};
          this.style3 = {};
        } else if (newVal === "吸鱼泵清污系统") {
          this.style2 = {
            backgroundColor: "#00b3f5"
          };
          this.style1 = {};
          this.style3 = {};
        } else if (newVal === "历史报警记录") {
          this.style3 = {
            backgroundColor: "#00b3f5"
          };
          this.style1 = {};
          this.style2 = {};
        }
      }
    }
  },
  methods: {
    change(value: string, path: string) {
      this.title = value;
      this.$router.push({
        path: path
      });
    }
  },
  setup() {
    const {
      timeState
    } = time();
    return {
      ...toRefs(timeState)
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
  font-size: 40px;
  letter-spacing: 15px;
  color: #436894;
}

.time {
  font-size: 24px;
  margin-right: 50px;
  color: #2c78d4;
}

.police {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  color: #fff;
}

.dao {
  display: flex;
  align-items: center;
  justify-content: center;

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
</style>
