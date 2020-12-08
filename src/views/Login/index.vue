<template>
  <div class="home">
    <div class="login">
      <a-form layout="vertical" :model="formInline" @submit="handleSubmit">
        <a-form-item>
          <a-input v-model:value="formInline.user" placeholder="Username">
            <template #prefix
              ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-model:value="formInline.password"
            type="password"
            placeholder="Password"
          >
            <template #prefix
              ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <div class="but">
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="formInline.user === '' || formInline.password === ''"
            >
              登陆
            </a-button>
          </a-form-item>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import Vue, { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const state = reactive({
      formInline: {
        user: "",
        password: "",
      },
    });
    const handleSubmit = (e: any) => {
      console.log(state.formInline);
    };
    return {
      ...toRefs(state),
      handleSubmit,
    };
  },
});
</script>
<style scoped>
.home {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  padding: 3%;
  width: 400px;
  height: 240px;
  border: 1px solid rgb(216, 220, 221);
}
.but {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
