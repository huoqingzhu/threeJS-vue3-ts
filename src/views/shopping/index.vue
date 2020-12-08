<template>
<div>
  <a-table :columns="columns" :data-source="historyData" :loading="loading" :pagination="historyPagination" :rowKey="record => record._id" @change="historyChange" bordered></a-table>
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
      change,
      historyChange,
      formatDate
    } = history();
    getHistory();
    return {
      columns,
      change,
      getHistory,
      historyChange,
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
