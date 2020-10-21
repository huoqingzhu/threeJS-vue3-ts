<template>
<div class="zhushi">
  <p>注释: <span>启动图标为绿色,关闭为红色</span></p>
</div>
<div class="about">
  <div class="box">
    <Card>
      <div class="boxs">
        <div class="left" style="display:block;margin-top:-20px">
          <div class="v1" style="padding:0">
            <Polices title="1#溶解氧信号" num="35"></Polices>
            <Polices title="1#温度信号" num="36"></Polices>
            <Polices title="1#PH信号" num="37"></Polices>
            <Polices title="1#盐度信号" num="38"></Polices>
          </div>
          <div class="v1" style="padding:0;margin-top:80px">
            <Polices title="2#溶解氧信号" num="39"></Polices>
            <Polices title="2#温度信号" num="40"></Polices>
            <Polices title="2#PH信号" num="41"></Polices>
            <Polices title="2#盐度信号" num="42"></Polices>
          </div>
        </div>
        <div class="right" style="display:flex;padding:0;margin-left:30px">
          <div>
            <div>水质传感器</div>
            <div>
              <img src="./img/4.png" alt="" style="width:150px;height:150px;margin-top:50px" />
            </div>
          </div>
          <div style="margin-top:-20px;font-size: 20px;margin-left:100px;width:250px">
            <div class="v1" style="padding:0">
              <Polices title="3#溶解氧信号" num="43"></Polices>
              <Polices title="3#温度信号" num="44"></Polices>
              <Polices title="3#PH信号" num="45"></Polices>
              <Polices title="3#盐度信号" num="46"></Polices>
            </div>
            <div class="v1" style="padding:0;margin-top:80px">
              <Polices title="4#溶解氧信号" num="47"></Polices>
              <Polices title="4#温度信号" num="48"></Polices>
              <Polices title="4#PH信号" num="49"></Polices>
              <Polices title="4#盐度信号" num="50"></Polices>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
  <div class="box">
    <Card>
      <div class="boxs">
        <div class="left">
          <div class="v1">
            <Police title="运行" color="#70bc3a" num="64"></Police>
            <Police title="综合故障报警" num="63"></Police>
          </div>
        </div>
        <div class="right">
          <div>发电机</div>
          <div>
            <img src="./img/2.png" alt="" style="width:200px;height:130px;margin-top:50px" />
          </div>
        </div>
      </div>
    </Card>
  </div>
  <div class="box">
    <Card>
      <div class="boxs">
        <div class="left">
          <div class="v1">
            <Police title="制氧机氧气纯度：" type="" num="25"></Police>
            <Police title="制氧机氧气压力：" type="" num="26"></Police>
            <Police title="制氧机氧气纯度报警" num="27"></Police>
            <Police title="制氧机氧气压力报警" num="28"></Police>
          </div>
        </div>
        <div class="right">
          <div>氧锥泵</div>

          <div style="display:flex;align-items: center; font-size: 20px;">
            <div>
              <img src="./img/3.png" alt="" />
            </div>
            <div style="margin-left:120px">
              <Police title="1#氧锥泵运行" color="#70bc3a" num="29"></Police>
              <Police title="1#氧锥泵过载" num="30"></Police>
              <Police title="2#氧锥泵运行" num="31"></Police>
              <Police title="2#氧锥泵过载" num="32"></Police>
              <Police title="3#氧锥泵运行" num="33"></Police>
              <Police title="3#氧锥泵过载" num="34"></Police>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
  <div class="box">
    <Card>
      <div class="boxs">
        <div class="left">
          <div class="v1">
            <Police title="1#养殖舱低液位" num="51"></Police>
            <Police title="2#养殖舱低液位" num="52"></Police>
            <Police title="3#养殖舱低液位" num="53"></Police>
          </div>
        </div>
        <div class="right">
          <div>液位信号</div>

          <div style="display:flex;align-items: center; font-size: 20px;">
            <div>
              <img src="./img/1.png" style="width:150px;height:150px" alt="" />
            </div>
            <div style="margin-left:0px">
              <Police title="货仓尾部右舷舱底水液位高" num="66"></Police>
              <Police title="泵舱右舷舱底水液位高" num="67"></Police>
              <Police title="前货舱右舷舱底水液位高" num="68"></Police>
              <Police title="140KW发电机日用柴油柜低液位" num="69"></Police>
              <Police title="140KW发电机日用柴油柜高液位" num="70"></Police>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
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
