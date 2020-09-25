<template>
  <div class="user">
    <i class="user-icon iconfont icon-yonghu" />
    <p class="user-name">未登录</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'User'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  padding: 16px;
  padding-bottom: 0;
  margin-bottom: 12px;

  .user-icon {
    font-size: 24px;
  }

  .user-name {
    margin-left: 8px;
    font-size: $font-size-lg;
  }
}
</style>
