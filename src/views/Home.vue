<template>
<div class="home">
  <RouterView />
</div>
</template>

<script lang="ts">
// eslint-disable-next-line prettier/prettier
import {
  defineComponent,
  reactive,
  toRefs
} from "vue";
// eslint-disable-next-line prettier/prettier
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup
} from "vue-class-component";
export default defineComponent({
  data() {
    return {
      age: 20
    };
  },
  setup() {
    const state = reactive({
      name: "霍庆祝"
    });
    const change = (): void => {
      state.name = "wo";
    };
    return {
      ...toRefs(state),
      change
    };
  }
});
</script>
