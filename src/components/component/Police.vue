<template>
<div class="police">
  <div>
    {{ title }}
    <span v-if="type !== '1'" class="value">{{ $store.state.listData[num] || 0 }} {{ type }}</span>
  </div>
  <div class="po" :style="style" v-if="type === '1'"></div>
</div>
</template>

<script lang="ts">
interface props {
  color: String;
  num: Number;
}
import Vue, {
  computed,
  defineComponent
} from "vue";
import {
  useStore
} from "vuex";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "标题"
    },
    color: {
      type: String,
      default: "red"
    },
    num: {
      type: String,
      default: "1"
    },
    type: {
      type: String,
      default: "1"
    },
    normal: {
      type: Boolean,
      default: true
    }
  },
  setup(props: any) {
    const store = useStore();
    const style = computed(() => {
      if (Boolean(store.state.listData[props.num])) {
        if (!props.normal) {
          console.log("测试");
          return {
            background: "#ccc"
          };
        }
        if (props.color === "red") {
          if (store.state.twinkle) {
            return {
              background: "red",
              animation: "myAnimation 0.5s infinite"
            };
          } else {
            return {
              background: "red"
            };
          }
        } else {
          return {
            background: `${props.color}`
          };
        }
      } else {
        if (!props.normal) {
          return {
            background: `${props.color}`
          };
        }
        return {
          background: "#ccc"
        };
      }
    });
    return {
      style
    };
  }
});
</script>

<style lang="less" scoped>
.value {
  margin-left: 10px;
  color: #23b6ec;
}

.police {
  display: flex;

  justify-content: space-between;
  height: 50px;
  align-items: center;
  color: 20px;
  color: #fff;
}

.po {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>
