<template>
  <div>
    <div ref="charts" :style="styles"></div>
  </div>
</template>

<script>
// 引入基本模板
import echarts from "echarts";
// 引入图组件
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
// 引入工具组件
import "echarts/lib/component/legend";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/dataZoom";
import { defineComponent } from "vue";
export default defineComponent({
  name: "TongJi",
  props: {
    styles: {
      type: Object,
      default: () => ({
        width: "100%",
        height: "100%",
      }),
    },
    option: {
      type: Object,
    },
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      num: true,
      myCharts: null,
    };
  },
  // watch: {
  //   "$store.state.height"(newval, olval) {
  //     this.myCharts.resize();
  //   },
  // },
  methods: {
    init() {
      const sandi = this;
      this.myCharts = echarts.init(this.$refs.charts); // 获取模板数据
      this.myCharts.setOption(this.option);
      window.addEventListener("resize", () => {
        setTimeout(() => {
          this.myCharts.resize();
        }, 20);
      });
      if (this.num) {
        this.myCharts.on("click", (params) => {
          sandi.trigger(params);
        });
        this.myCharts.getZr().on("mousemove", (params) => {
          // hove事件
          const pointInPixel = [params.offsetX, params.offsetY];
          if (this.myCharts.containPixel("grid", pointInPixel)) {
            const xIndex = this.myCharts.convertFromPixel(
              {
                seriesIndex: 0,
              },
              [params.offsetX, params.offsetY]
            )[0];
          }
        });
        this.myCharts.on("dataZoom", (params) => {
          // 滚动/缩放事件
          if (params.batch) {
            // 缩放
            sandi.dataZoom(params.batch[0]);
          } else {
            // 滚动
            sandi.dataZoom(params);
            this.$store.commit("setVoordinate", {
              start: params.start,
              end: params.end,
            });
          }
        });
      }
      this.num = false;
    },
    clear() {
      if (this.myCharts) {
        this.myCharts.clear();
      }
    },
    trigger(params) {
      this.$emit("chartClick", params);
    },
    dataZoom(params) {
      this.$emit("dataZoomEvent", params);
    },
  },
});
</script>
