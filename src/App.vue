<script setup>
import TaskBar from './components/TaskBar.vue';
import DesktopItem from './components/DesktopItem.vue';

const desktopItems = [ 
  {
    icon: '../src/assets/recycling-bin.png',
  title: 'Recycling bin'
},
  {
    icon: '../src/assets/notepad.png',
    title: 'notepad'
  },
  {
    icon: '../src/assets/my-computer.png',
    title: 'my computer'
  },
   {
    icon: '../src/assets/internet-explorer.png',
    title: 'internet explorer'
  },
]

</script>

<template>
  <div class="desktop grid grid-rows-1">
    <div class="flex flex-row justify-start gap-12 p-4">
      <DesktopItem v-for="item in desktopItems" :icon="item.icon" :title="item.title" :key="item"></DesktopItem>
    </div>
    <TaskBar class="self-end"></TaskBar>
  </div>
</template>

<style>
.desktop {
  background: var(--blueBg);
  @apply min-h-screen min-w-[100vw];
}

.taskbar-item {
  @apply cursor-pointer;
}

.taskbar {
  background: var(--windowsGray);
  @apply border-t-2 border-white py-2;
}
.taskbar-clock {
  margin-left: auto !important;
}
</style>
