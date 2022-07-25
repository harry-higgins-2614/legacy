<script setup>
import { reactive } from 'vue';
const items = reactive([
  {
    icon: null,
    title: 'Internet Explorer',
    subMenu: [{}],
    active: false,
    action: (self) => {
      console.log(self.title + ' clicked');
    },
  },
  {
    icon: null,
    title: 'Calculator',
    subMenu: null,
    active: false,
    action: null,
  },
]);
</script>
<template>
  <div class="taskbar-item window px-2 flex space-around">Start</div>
  <div class="window start-menu">
    <div class="items relative flex flex-col flex-wrap w-full space-y-2">
      <div
        class="item"
        v-for="item in items"
        :key="item"
        @mouseenter="item.active = true"
        @mouseleave="item.active = false"
        @click="item.action(item)"
        :class="[
          item.active ? 'item--active' : '',
          item.subMenu !== null ? 'item--has-menu' : '',
        ]"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.start-menu {
  @apply absolute
      bottom-8
      h-1/3
      py-0.5
      px-0.5
      -left-1
      flex flex-row
      w-1/4
      -mb-0.5
      left-[0px]
      font-normal;
}
.item {
  @apply w-full
          first-letter:underline
          pl-1
          cursor-pointer;

  position: relative;

  &--active {
    background: var(--windowsActiveBlue);
    color: white;

    &::after {
      border-left: 8px solid white !important;
    }
  }

  &--has-menu {
    &::after {
      content: '';
      position: absolute;
      right: 4px;
      top: calc(50% - 6px);
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;

      border-left: 8px solid black;
    }
  }
}
</style>
