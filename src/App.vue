<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/layout/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout
  }
})
</script>

<style lang="scss">
#app {
  height: 100%;
  background-color: $body-bgcolor;
  color: $font-color;
  font-size: $font-size;
}
</style>
