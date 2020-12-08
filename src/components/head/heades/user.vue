<template>
  <div class="center user">
    <a href="https://github.com/huoqingzhu/tree-vue3-ts" target="_blank">
      <GithubOutlined :style="{ fontSize: '24px', color: '#333' }" />
    </a>
    <!-- <a-dropdown>
    <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
      <GithubOutlined :style="{ fontSize: '24px', color: '#333' }" />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">切换用户</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">个人中心</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;" @click="userOut">退出登陆</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { GithubOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    GithubOutlined,
  },
  methods: {
    userOut() {
      console.log("退出登陆");
    },
  },
});
</script>
<style scoped>
.user {
  width: 100%;
}
</style>