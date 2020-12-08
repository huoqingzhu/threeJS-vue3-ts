<template>
  <div class="header">
    <div class="left">后台管理</div>
    <div class="menu">
      <a-menu
        v-model:selectedKeys="current"
        :mode="mode"
        @click="change"
        theme="dark"
        :style="style"
      >
        <template v-for="item in data">
          <template v-if="!item.children">
            <a-menu-item :key="item.path">
              <component
                v-bind:is="item.meta.iocn"
                :style="{ fontSize: '24px', color: '#fff' }"
              ></component>
              <span style="fontsize: 24px">{{ item.name }}</span>
            </a-menu-item>
          </template>
          <template v-else>
            <a-sub-menu :key="item.path">
              <template v-slot:title>
                <span class="submenu-title-wrapper">
                  <component
                    v-bind:is="item.meta.iocn"
                    :style="{ fontSize: '24px', color: '#fff' }"
                  ></component>
                  <span style="fontsize: 24px">{{ item.name }}</span>
                </span>
              </template>
              <a-menu-item v-for="items in item.children" :key="items.path">
                <component
                  v-bind:is="items.meta.iocn"
                  :style="{ fontSize: '20px', color: '#fff' }"
                ></component>
                <span style="fontsize: 20px">{{ items.name }}</span>
              </a-menu-item>
            </a-sub-menu>
          </template>
        </template>
      </a-menu>
    </div>
    <div class="right">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          <UserOutlined :style="{ fontSize: '24px', color: '#fff' }" />
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
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  PropertySafetyOutlined,
  CloudOutlined,
  AuditOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    MailOutlined: MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    PropertySafetyOutlined,
    CloudOutlined,
    AuditOutlined,
    ProfileOutlined,
    UserOutlined,
  },
  setup() {
    const router = useRouter();
    const data = JSON.parse(localStorage.getItem("router") as string);
    const obj = reactive({
      current: ["mail"],
      data: data,
      mode: "horizontal", //inline
      style: "width: 100%",
      a: "MailOutlined",
      change(key: any) {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        router.push(key.key).catch(() => {});
      },
    });
    const userOut = () => {
      router.push("/login").catch(() => {});
    };
    return {
      ...toRefs(obj),
      userOut,
    };
  },
});
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #001529;
  display: flex;
  .left {
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.2rem;
  }
  .menu {
    width: 100%-3rem;
  }
  .right {
    width: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
