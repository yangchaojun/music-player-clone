<template>
  <div class="page">
    <Button>发现音乐<Spin>222</Spin></Button>
  </div>
</template>

<script>
import { defineComponent, h } from 'vue'
import { Button, Spin } from 'ant-design-vue'
Spin.setDefaultIndicator({
  indicator: h('i', {
    class: 'anticon anticon-loading anticon-spin ant-spin-dot'
  })
})
export default defineComponent({
  components: {
    Button,
    Spin
  },
  setup() {}
})
</script>

<style lang="scss" scoped>
</style>