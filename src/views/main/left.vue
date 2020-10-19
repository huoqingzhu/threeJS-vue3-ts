<template>
<div class="V1">
  <div class="line" style="width:55px"></div>
  <img src="./img/heng.png" alt="" />
  <div class="line" style="width:105px"></div>
  <div class="v2">
    <div class="v3">
      <div class="v4">{{ title }}</div>
      <div class="center pad">
        <div>
          <div class="circularS"></div>
          <div class="yLine" style="height:55px;margin-left:18px"></div>
        </div>
        <div>
          <div class="circularS"></div>
          <div class="yLine" style="height:55px;margin-left:18px"></div>
        </div>
      </div>
    </div>

    <div class="circular1">
      <img src="./img/open.png" alt="" />
    </div>
    <div class="v5">
      <div style="display:flex">
        <div>
          <div class="yLine" style="height:55px;margin-left:18px"></div>
          <img src="./img/shu.png" alt="" style="margin-left:0px" />
          <div class="yLine" style="height:55px;margin-left:18px"></div>
        </div>
        <div style="margin-top:58px;margin-left:30px;">
          <div class="circularS">P</div>
          <div class="yLine" style="height:55px;margin-left:18px"></div>
        </div>
        <div style="margin-left:20px;margin-top:25px">
          <div class="center">
            <div class="line" style="width:55px"></div>
            <img src="./img/heng.png" alt="" />
            <div class="line" style="width:55px"></div>
          </div>
          <div class="center" style="margin-top:-20px">
            <div class="yLine" style="height:105px;"></div>
            <div class="yLine" style="height:105px;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="line" style="width:105px"></div>
  <img src="./img/heng.png" alt="" />
  <div class="line" style="width:55px"></div>
  <img src="./img/heng.png" alt="" />
  <div class="line" style="width:105px"></div>
  <div>
    <img src="./img/fa.png" alt="" style="width:40px;height:40px;margin-top:-24px" />
  </div>
  <div class="line" style="width:105px"></div>
  <img src="./img/san1.png" class="san" style=" margin-left: -450px;" alt="" />
</div>
</template>

<script lang="ts">
import Vue, {
  defineComponent
} from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "NO.1养殖海水泵"
    }
  }
});
</script>

<style lang="less" scoped>
.V1 {
  display: flex;
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

.circular {
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.circular1 {
  width: 50px;
  height: 50px;
  border: 2px solid #00ff2e;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.san {
  width: 30px;
  height: 20px;
}

.v2 {
  position: relative;
}

.v3 {
  position: absolute;
  width: 150px;
  height: 200px;
  font-size: 16px;
  margin-top: -130px;
  margin-left: -50px;

  border: 2px solid #ccc;

  .v4 {
    height: 60px;
    width: 150px;
    line-height: 60px;
    text-align: center;
  }
}

.circularS {
  width: 40px;
  height: 40px;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ccc;
}

.circularS1 {
  width: 40px;
  height: 40px;
  border: 3px solid #4aa0a0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}

.pad {
  padding: 0 5px;
}

.v5 {
  position: absolute;
  margin-top: -176px;
  margin-left: 210px;
}
</style>
