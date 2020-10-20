<template>
<div class="zhushi">
  <p>注释: <span>启动图标为绿色,关闭为红色</span></p>
</div>
<!--第一层 -->
<div class="home">
  <div class="fex" style="margin-left: 35%;">
    <div class="line" style="width:105px"></div>
    <img src="./img/heng.png" alt="" />
    <div class="line" style="width:105px"></div>
    <img src="./img/heng.png" alt="" />
    <div class="line" style="width:105px"></div>
    <img src="./img/heng.png" alt="" />
    <div class="line" style="width:105px"></div>
    <img src="./img/san1.png" class="san" style=" margin-left: -540px;" alt="" />
  </div>

  <!--第二层 -->
  <div class="fex" style="margin-top:-25px;margin-left: 35%;">
    <div class="yLine" style="height:55px"></div>
    <div class="yLine" style="height:55px; margin-left: 560px;"></div>
  </div>
  <!--第三层 -->
  <div class="fex" style="margin-left: 8.4%;">
    <div class="fs">排至舷外</div>
    <img src="./img/bo.png" alt="" />
    <div class="line" style="width:105px"></div>
    <img src="./img/heng.png" alt="" />
    <div class="line" style="width:105px"></div>
    <img src="./img/lei.png" alt="" style=" z-index: 2;" />
    <img src="./img/shu.png" alt="" style=" margin-left: 505px;margin-top:-88px;" />
  </div>
  <div class="yLine" style="height:55px;margin-left:64.5%;margin-top:-85px"></div>
  <!--第四层 -->
  <div class="fex" style="margin-left: 8.4%;margin-top:-5px">
    <div class="fs">海水养殖系统</div>
    <div class="line" style="width:105px;margin-left:30px"></div>
    <img src="./img/heng.png" alt="" />
    <div class="line" style="width:255px"></div>
    <img src="./img/heng.png" alt="" />
    <div class="line" style="width:50px"></div>
    <div class="line" style="width:105px;margin-left:100px;margin-top:-25px"></div>
    <img src="./img/heng.png" alt="" style="margin-top:-25px" />
    <div class="line" style="width:105px;margin-top:-25px"></div>
  </div>
  <!--第五层 -->
  <div class="fex" style="margin-top:-38px">
    <div class="yLine" style="height:105px;margin-left:42.5%;margin-top:-70px"></div>
    <div class="yLine" style="height:205px;;margin-left:100px;"></div>
    <img src="./img/zheng.png" alt="" style=" width: 200px;
  height: 150px;margin-left:240px;margin-top:-110px" />
    <div class="line" style="width:105px;margin-left:-15px;"></div>
    <img src="./img/heng.png" alt="" />
    <div class="line" style="width:105px;"></div>
    <img src="./img/bo.png" alt="" />
    <div class="fs">排至舷外</div>
  </div>
  <!-- 第六层-->
  <div class="fex" style="margin-left: 18.9%;margin-top:-125px;height:80px">
    <div class=" fs">排至舷外</div>
    <img src="./img/bo.png" alt="" />
    <div class="line" style="width:305px"></div>
    <div class="fs" style="margin-left:350px;margin-top:40px">真空罐</div>
  </div>
  <!-- 第六层-->
  <div class="line" style="width:105px;margin-left:45.2%;margin-top:46px"></div>
  <!-- 第七层-->
  <div style="margin-left:32%;margin-top:20px;display:flex">
    <div>
      <div class="fs2">NO.1养殖水舱</div>
      <img src="./img/shui.png" class="shui" alt="" />
      <div class="yLine" style="height:55px;margin-left:70px"></div>
      <img :src="src1" alt="" style="margin-left:48px" />
      <div class="yLine" style="height:155px;margin-left:70px"></div>
    </div>
    <div class="yLine" style="height:465px;margin-left:100px;margin-top:-25px"></div>
    <div style="margin-top:-30px">
      <div class="yLine" style="height:205px;margin-left:100px;margin-top:10px"></div>
      <div class="line" style="width:105px;margin-left:50px"></div>
      <div style="display:flex;margin-left:50px">
        <div class="yLine" style="height:250px"></div>
        <div class="yLine" style="height:155px;margin-left:95px"></div>
      </div>
    </div>
    <div style="margin-left:30px;">
      <div class="fs2">NO.2养殖水舱</div>
      <img src="./img/shui.png" class="shui" alt="" />
      <div class="yLine" style="height:55px;margin-left:70px"></div>
      <img :src="src2" alt="" style="margin-left:48px" />
      <div class="yLine" style="height:55px;margin-left:70px"></div>
    </div>
    <div style="margin-left:80px">
      <div class="fs2">NO.3养殖水舱</div>
      <img src="./img/shui.png" class="shui" alt="" />
      <div class="yLine" style="height:55px;margin-left:70px"></div>
      <img :src="src3" alt="" style="margin-left:48px" />
      <div class="yLine" style="height:155px;margin-left:70px"></div>
    </div>
  </div>
  <!-- 第八层-->
  <div class="line" style="width:108px;margin-left:53.2%;margin-top:-100px"></div>
  <!--第九层 -->
  <div class="fex" style="margin-top:90px;margin-left:35.8%">
    <div class="line" style="width:180px"></div>
    <div class="line" style="width:435px;margin-left:55px"></div>
  </div>
</div>
第九层 -->
<div class="butt">
  <Card>
    <div style="padding: 20px;">
      <div><span>吸鱼泵排污设备控制箱：</span></div>
      <Police title="自动模式" color="#70bc3a" num="56"></Police>
      <Police title="手动模式" color="#70bc3a" num="56"></Police>
      <Police title="异常报警" num="57"></Police>
      <Police title="真空泵启动" num="59"></Police>
      <Police title="真空泵启动完成" num="60"></Police>
    </div>
  </Card>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  computed
} from "vue";
import {
  fish
} from "./hooks";
import {
  useStore
} from "vuex";
export default defineComponent({
  setup(a: any) {
    const {
      State
    } = fish();
    const store = useStore();
    const src1 = computed(() => {
      if (Boolean(store.state.listData[7])) {
        return require("./img/shu1.png");
      } else {
        return require("./img/shu2.png");
      }
    });
    const src2 = computed(() => {
      if (Boolean(store.state.listData[9])) {
        return require("./img/shu1.png");
      } else {
        return require("./img/shu2.png");
      }
    });
    const src3 = computed(() => {
      if (Boolean(store.state.listData[11])) {
        return require("./img/shu1.png");
      } else {
        return require("./img/shu2.png");
      }
    });

    return {
      ...toRefs(State),
      src1,
      src2,
      src3
    };
  }
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
