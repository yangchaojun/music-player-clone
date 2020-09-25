<template>
  <div class="menu">
    <User />
    <ul class="menu-list">
      <router-link
        class="menu-item"
        active-class="menu-item-active"
        v-for="(item, index) in menus"
        tag="li"
        :key="index"
        :to="item.to"
      >
        <i class="iconfont" :class="item.icon" />
        <span class="menu-title">{{ item.title }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import User from '@/components/user'
export default defineComponent({
  components: {
    User
  },
  setup() {
    const state = reactive({
      menus: [
        {
          title: '发现音乐',
          icon: 'icon-yinyue',
          to: '/discovery'
        },
        {
          title: '私人FM',
          to: '/fm'
        }
      ]
    })

    const { menus } = toRefs(state)

    return {
      menus
    }
  }
})
</script>

<style lang="scss" scoped>
.menu {
  width: 400px;
  height: 100%;
  background-color: $menu-bgcolor;
}

.menu-item {
  padding: 12px 18px;
  cursor: pointer;

  &:hover {
    background: $menu-item-hover-bg;
  }

  &-active {
    color: $theme-color;
    background: $menu-item-active-bg;
  }

  .menu-title {
    display: inline-block;
    margin-left: 8px;
  }
}
</style>