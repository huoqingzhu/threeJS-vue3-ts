<template>
<div class="zhushi">
  <p>注释: <span>当前为首页</span></p>
  <div class="title">
    一.计算属性传参数
  </div>

  <div>
    (1). 2.x写法（现在一样能用） computed: { test() { return function (value:
    any) { return `我是计算属性${value}`; }; } },
  </div>
  <div>
    (2.) setup写法: const setColor=computed(()=>{ return (value:any)=>{ return
    `${state.name}${value}` } })
  </div>
  <p>测试1setColor(1):{{ setColor(1) }}</p>
  <p>测试2test(2):{{ test(2) }}</p>
  <div class="title">
    二.watch
  </div>
  <p>
    先定义一个对象watchChange:{{ JSON.stringify(watchChange) }}
    <a-button @click="fn">change</a-button>
  </p>
  <p>
    2.x watch 监听watchChange: watchChange: { deep: true, immediate: false,
    handler(a, b) { console.log("2.x watch 变化le"); } }
  </p>
  <p>
    3.x warch watch(state.watchChange,() => { console.log("3.x变化了")
    },{deep: true, immediate: false, })
  </p>
  <p>watchEffect(() => console.log(state.watchChange.age))</p>
</div>
</template>

<script lang="ts">
import {
  compile,
  defineComponent,
  toRefs
} from "vue";
import {
  mapHosk
} from "./hosk";

export default defineComponent({
  computed: {
    test() {
      return (value: any) => {
        return `计算属性${value}`;
      };
    }
  },
  data() {
    return {
      obj: {
        name: "huo"
      }
    };
  },
  methods: {
    fn() {
      (this as any).watchChange.age = (this as any).watchChange.age + 1;
      console.log((this as any).watchChange.age);
    }
  },
  watch: {
    watchChange: {
      deep: true, //开启深度监听
      immediate: false, //上来就观察计算
      handler(a, b) {
        console.log("2.x watch 变化le");
      }
    }
  },
  setup() {
    const {
      state,
      setColor
    } = mapHosk();
    return {
      ...toRefs(state),
      setColor
    };
  }
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
