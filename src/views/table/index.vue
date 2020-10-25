<template>
<div class="zhushi">
  <p>注释: <span>启动图标为绿色,关闭为红色</span></p>
</div>
</template>

<script lang="ts">
import Vue, {
  defineComponent,
  reactive,
  toRefs
} from "vue";
export default defineComponent({
  setup() {
    const state = reactive({
      test: "12"
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="less" scoped>
.zhushi {
  margin-top: -40px;
  color: #fff;
  font-size: 18px;

  span {
    margin-left: 30px;
  }
}

.about {
  width: 100%;
  height: 100%;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.box {
  width: 820px;
  height: 400px;
}

.boxs {
  width: 100%;
  height: 100%;
  display: flex;
}

.left {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right {
  width: 70%;
  padding: 10px 30px;
  font-size: 28px;
}

.v1 {
  width: 100%;
  padding: 0 30px;
}
</style>
