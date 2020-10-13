<template>
<div class="header">
  <a-menu v-model:selectedKeys="current" mode="horizontal" @click="change">
    <template v-for="item in data">
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <component v-bind:is="item.meta.iocn" :style="{ fontSize: '20px', color: '#08c' }"></component>
          <span style="fontSize:18px">{{ item.name }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <a-sub-menu :key="item.path">
          <template v-slot:title>
            <span class="submenu-title-wrapper">
              <component v-bind:is="item.meta.iocn" :style="{ fontSize: '20px', color: '#08c' }"></component>
              <span style="fontSize:18px">{{ item.name }}</span>
            </span>
          </template>
          <a-menu-item v-for="items in item.children" :key="items.path">
            <component v-bind:is="items.meta.iocn" :style="{ fontSize: '20px', color: '#08c' }"></component>
            <span style="fontSize:14px">{{ items.name }}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs
} from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons-vue";
import {
  useRouter
} from "vue-router";
export default defineComponent({
  components: {
    MailOutlined: MailOutlined,
    AppstoreOutlined,
    SettingOutlined
  },
  setup() {
    const router = useRouter();
    const obj = reactive({
      current: ["mail"],
      data: JSON.parse(localStorage.getItem("router")),
      a: "MailOutlined",
      change({
        key
      }) {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        router.push(key).catch(() => {});
      }
    });
    return {
      ...toRefs(obj)
    };
  }
});
</script>

<style lang="less" scoped>
.header {
  width: 100%;
}
</style>
