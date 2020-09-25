<template>
  <div class="layout">
    <layout-header />
    <div class="layout-body">
      <layout-menu />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHeader from './header.vue'
import LayoutMenu from './menu.vue'

export default defineComponent({
  components: {
    LayoutHeader,
    LayoutMenu
  }
})
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;

  .layout-body {
    display: flex;
    height: calc(100% - #{$header-height});

    .content {
      flex: 1;
    }
  }
}
</style>