<template>
<div>
  <h1>ecahrts</h1>
  <chart ref="charts" :option="option" :style="sty"></chart>
</div>
</template>

<script lang="ts">
import chart from "@/components/echart/ecahrt.vue";

import {
  defineComponent,
  onMounted,
  ref
} from "vue";
import {
  setup
} from "vue-class-component";

export default defineComponent({
  components: {
    chart
  },
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          areaStyle: {}
        }]
      },
      sty: {
        height: "500px",
        width: "100%"
      },
      boxs: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs);
    });
  },
  methods: {
    person() {
      console.log("父组件调用了我");
    }
  },
  setup(a, b) {
    const charts = ref({
      init: Object
    });
    onMounted(() => {
      charts.value.init();
    });
    return {
      charts
    };
  }
});
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  text-align: center;
  font-size: 24px;
  height: 40px;
  line-height: 40px;
}
</style>
