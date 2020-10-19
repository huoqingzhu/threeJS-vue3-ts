<template>
<div class="about">
  <div class="box">
    <Card>
      <div class="boxs">
        <div class="left">
          <div class="v1">
            <Police title="1#溶解氧信号"></Police>
            <Police title="1#温度信号"></Police>
            <Police title="1#PH信号"></Police>
            <Police title="1#盐度信号"></Police>
          </div>
        </div>
        <div class="right">
          <div>水质传感器</div>
          <div>
            <img src="./img/4.png" alt="" style="width:150px;height:150px;margin-top:50px" />
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
            <Police title="1#溶解氧信号"></Police>
            <Police title="1#温度信号"></Police>
            <Police title="1#PH信号"></Police>
            <Police title="1#盐度信号"></Police>
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
            <Police title="1#溶解氧信号"></Police>
            <Police title="1#温度信号"></Police>
            <Police title="1#PH信号"></Police>
            <Police title="1#盐度信号"></Police>
          </div>
        </div>
        <div class="right">
          <div>氧锥泵</div>

          <div style="display:flex;align-items: center; font-size: 20px;">
            <div>
              <img src="./img/3.png" alt="" />
            </div>
            <div style="margin-left:120px">
              <Police title="1#氧锥泵运行"></Police>
              <Police title="1#氧锥泵过载"></Police>
              <Police title="2#氧锥泵运行"></Police>
              <Police title="2#氧锥泵过载"></Police>
              <Police title="3#氧锥泵运行"></Police>
              <Police title="3#氧锥泵过载"></Police>
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
            <Police title="1#溶解氧信号"></Police>
            <Police title="1#温度信号"></Police>
            <Police title="1#PH信号"></Police>
            <Police title="1#盐度信号"></Police>
          </div>
        </div>
        <div class="right">
          <div>氧锥泵</div>

          <div style="display:flex;align-items: center; font-size: 20px;">
            <div>
              <img src="./img/1.png" style="width:150px;height:150px" alt="" />
            </div>
            <div style="margin-left:0px">
              <Police title="货仓尾部右舷舱底水液位高"></Police>
              <Police title="泵舱右舷舱底水液位高"></Police>
              <Police title="前货舱右舷舱底水液位高"></Police>
              <Police title="140KW发电机日用柴油柜低液位"></Police>
              <Police title="140KW发电机日用柴油柜高液位"></Police>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</div>
</template>

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
