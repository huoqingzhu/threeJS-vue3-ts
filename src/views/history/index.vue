<template>
<div>
  <div class="head">
    <a-button @click="change(true)" :class="switchs ? 'on' : 'off'">历史数据</a-button>
    <a-button @click="change(false)" :class="switchs ? 'off' : 'on'">报警记录</a-button>
  </div>
  <div class="table" v-if="switchs">
    <a-table :columns="columns" :data-source="historyData" :loading="loading" :pagination="historyPagination" :rowKey="record => record._id" @change="historyChange" bordered></a-table>
  </div>
  <div class="table" v-else>
    <a-table :columns="column2" :data-source="policeData" :loading="loading" :pagination="policePagination" :rowKey="record => record._id" bordered @change="policeChange">
      <template v-slot:clear_time="{ text: clear_time }">
        <span :class="clear_time.clear_time.length > 3 ? '' : 'col'">{{
            clear_time.clear_time
          }}</span>
      </template>
    </a-table>
  </div>
</div>
</template>

<script lang="ts">
import Vue, {
  defineComponent,
  reactive,
  toRefs
} from "vue";
import {
  history
} from "./hosk";
export default defineComponent({
  setup() {
    const {
      state,
      getHistory,
      getPolice,
      change,
      historyChange,
      policeChange,
      formatDate
    } = history();
    getHistory();
    getPolice();
    return {
      columns,
      column2,
      change,
      getHistory,
      getPolice,
      historyChange,
      policeChange,
      formatDate,
      ...toRefs(state)
    };
  }
});
const columns = [{
    title: "代码",
    key: "code",
    dataIndex: "code",
    align: "center"
  },
  {
    title: "测点名称",
    key: "name",
    dataIndex: "name",
    align: "center"
  },
  {
    title: "测量值",
    key: "value",
    dataIndex: "value",
    align: "center"
  },

  {
    title: "时间",
    key: "time",
    dataIndex: "time",
    align: "center"
  }
];
const column2 = [{
    title: "报警级别",
    key: "level",
    dataIndex: "level",
    align: "center"
  },
  {
    title: "报警名称",
    key: "name",
    dataIndex: "name",
    align: "center"
  },

  {
    title: "触发时间",
    key: "happen_time",
    dataIndex: "happen_time",
    align: "center"
  },
  {
    title: "消除时间",
    key: "clear_time",
    slots: {
      customRender: "clear_time"
    },
    align: "center"
  }
];
</script>

<style lang="less" scoped>
.table {
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #121c30;
}

.head {
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin-top: -30px;
  margin-bottom: 30px;

  button {
    width: 120px;
    height: 40px;
    font-size: 22px;
  }
}

.on {
  color: #40a9ff;
}

.off {
  color: rgb(47, 45, 45);
}

.col {
  color: red;
}
</style>
