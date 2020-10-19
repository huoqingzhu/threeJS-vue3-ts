<template>
<div class="homeR">
  <span style="font-size: 20px;">排至舷外</span>
  <div>
    <img src="./img/bo.png" alt="" />
  </div>

  <div class="yLine" style="height:255px;"></div>
  <div><img src="./img/shu.png" alt="" style="margin-left:0px" /></div>
  <div class="yLine" style="height:55px;"></div>
  <div class="v20">
    <div class="v23" style="margin-left:-26px;margin-top:-300px">
      <div class="line" style="width:55px"></div>
      <img src="./img/heng.png" alt="" />
      <div class="line" style="width:55px"></div>
    </div>
    <span class="v21">{{ title }}</span>
    <div class="v25">{{ title }}</div>
    <div class="v24">{{ title }}</div>
    <img src="./img/shuS.png" class="v22" alt="" />
    <div class="v23" style="margin-left:-95px;margin-top:100px">
      <img src="./img/heng.png" alt="" />
      <div class="line" style="width:55px"></div>
    </div>
    <img src="./img/chang.png" alt="" style="width:250px;height:250px" />
  </div>
  <div class="yLine" style="height:55px;"></div>
  <img src="./img/shu.png" alt="" />
  <div class="yLine" style="height:105px;"></div>
</div>
</template>

<script lang="ts">
import Vue, {
  defineComponent
} from "vue";
export default defineComponent({
  name: "com2",
  props: {
    title: {
      type: String,
      default: "养殖海水泵1"
    }
  }
});
</script>

<style lang="less" scoped>
.homeR {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.line {
  height: 5px;
  background-color: #fff;
}

.yLine {
  width: 5px;
  background-color: #fff;
}

.v20 {
  position: relative;
}

.v21 {
  position: absolute;
  margin-top: 100px;
  margin-left: 60px;
}

.v22 {
  position: absolute;
  margin-top: 400px;
  margin-left: 115px;
  width: 20px;
  height: 30px;
}

.v23 {
  position: absolute;
  display: flex;
  align-items: center;
}

.v24 {
  position: absolute;
  margin-top: 310px;
  margin-left: 30px;
  width: 80px;
  font-size: 16px;
}

.v25 {
  position: absolute;
  margin-top: -90px;
  margin-left: 25px;
  width: 80px;
  font-size: 16px;
}
</style>
