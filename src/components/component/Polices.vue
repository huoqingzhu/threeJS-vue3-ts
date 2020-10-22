<template>
<div class="police">
  <div>{{ title }}</div>
  <div class="fex">
    <div class="fex">
      <span class="value"> {{ $store.state.listData[value] || 0 }}</span>
      高
      <div class="po" :style="style"></div>
    </div>
    <div class="fex" style="margin-left:10px">
      低
      <div class="po" :style="styles"></div>
    </div>
  </div>
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
    num: {
      type: String,
      default: "1"
    },
    value: {
      type: String,
      default: "1"
    }
  },
  setup(props: any) {
    const store = useStore();
    const style = computed(() => {
      if (store.state.listData[props.num] == 2) {
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
          background: "#ccc"
        };
      }
    });
    const styles = computed(() => {
      if (store.state.listData[props.num] == 1) {
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
          background: "#ccc"
        };
      }
    });
    return {
      style,
      styles
    };
  }
});
</script>

<style lang="less" scoped>
.police {
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  color: 20px;
  color: #fff;
  font-size: 18px;
  padding: 0 10px;
}

.po {
  width: 22px;
  height: 22px;
  border-radius: 50%;
}

.fex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.value {
  color: aqua;
  margin-right: 5px;
}
</style>
