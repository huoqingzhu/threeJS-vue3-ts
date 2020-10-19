<template>
<div class="police">
  <div>{{ title }}</div>
  <div class="po" :style="style"></div>
</div>
</template>

<script lang="ts">
interface props {
  color: String;
  title: String;
}
import Vue, {
  computed,
  defineComponent
} from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "标题"
    },
    color: {
      type: String,
      default: "red"
    }
  },
  setup(c: props) {
    const style = computed(() => {
      return {
        backgroundColor: `${c.color}`
      };
    });
    return {
      style
    };
  }
});
</script>

<style lang="less" scoped>
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
