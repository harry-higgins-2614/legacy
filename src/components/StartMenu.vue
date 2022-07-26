<script setup>
import { ref, reactive } from 'vue';

const active = ref(false);
const items = reactive([
  {
    icon: null,
    title: 'Internet Explorer',
    subMenu: [
      {
        icon: null,
        title: 'Better browser',
        active: false,
        action: (self) => {
          return;
        },
      },
    ],
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

const handleMouseLeave = (item) => {
  if (item.subMenu == null) {
    item.active = false;
  } else {
    let activeSubmenuItems = item.subMenu.filter((e) => e.active);
    if (activeSubmenuItems.length > 0) {
      activeSubMenuItems.forEach((subItem) => (subItem.active = false));
    } else {
      item.active = false;
    }
  }
};

const close = () => {
  items.forEach((item) => {
    item.active == false;
  });
  active.value = false;
};
</script>
<template>
  <div
    class="taskbar-item window px-2 flex space-around"
    @click.stop="active = !active"
  >
  <img src="../assets/windows-95.png" class="h-6 w-6 mr-2">
    Start
  </div>
  <div class="window start-menu" v-outside-click="close" v-if="active">
    <div class="items relative flex flex-col flex-wrap w-full space-y-2">
      <div
        class="item"
        v-for="item in items"
        :key="item"
        @mouseenter="item.active = true"
        @mouseleave="handleMouseLeave(item)"
        @click="
          active = false;
          item.action(item);
        "
        :class="[
          item.active ? 'item--active' : '',
          item.subMenu !== null ? 'item--has-menu' : '',
        ]"
      >
        {{ item.title }}

        <div
          v-if="item.subMenu && item.active"
          class="
            absolute
            -top-1
            left-[100%]
            -ml-0.5
            bg-red-200
            w-full
            -mr-2
            pr-0
            window
            text-black
          "
        >
          <div
            class="item static"
            v-for="subItem in item.subMenu"
            :key="subItem"
            @mouseenter="
              subItem.active = true;
              item.active = true;
            "
            @mouseleave="subItem.active = false"
            @click="
              active = false;
              subItem.action(subItem);
            "
            :class="[
              subItem.active ? 'item--active' : '',
            ]"
          >
            {{ subItem.title }}
          </div>
        </div>
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
      min-w-[20%]
      -mb-0.5
      left-[0px]
      font-normal;
}
.item {
  @apply w-full
          first-letter:underline
          pl-1
          cursor-pointer
          mr-0
          relative
          min-w-[20%];

  position: relative;

  &--active {
    background: var(--windowsActiveBlue);
    color: white;
    @apply mr-0 pr-0;

    &::after {
      border-left: 8px solid white !important;
    }
  }

  &--has-menu {
    &::after {
      content: '';
      position: absolute;
      right: 0px;
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
