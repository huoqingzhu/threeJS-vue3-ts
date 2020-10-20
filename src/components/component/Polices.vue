<template>
<div class="police">
  <div>{{ title }}</div>
  <div class="fex">
    <div class="fex">
      高
      <div class="po" :style="style"></div>
    </div>
    <div class="fex" style="margin-left:5px">
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
    color: {
      type: String,
      default: "red"
    },
    num: {
      type: String,
      default: "1"
    }
  },
  setup(props: any) {
    const store = useStore();
    const style = computed(() => {
      console.log(props.num);
      console.log(Boolean(store.state.listData[props.num]));
      if (Boolean(store.state.listData[props.num])) {
        return {
          background: `${props.color}`
        };
      } else {
        return {
          background: "#ccc"
        };
      }
    });
    const styles = computed(() => {
      console.log(props.num);
      console.log(Boolean(store.state.listData[props.num]));
      if (!Boolean(store.state.listData[props.num])) {
        return {
          background: `${props.color}`
        };
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
</style>
