<script setup>
import { ref } from 'vue';
import StartMenu from './components/StartMenu.vue';
const date = ref(
  new Date()
    .toLocaleTimeString('en-gb', { timeStyle: 'short', hour12: true })
    .toString()
    .toUpperCase()
    .replace(' ', '')
);

setInterval(() => {
  date.value = new Date()
    .toLocaleTimeString('en-gb', { timeStyle: 'short', hour12: true })
    .toString()
    .toUpperCase()
    .replace(' ', '');
}, 1000);
</script>

<template>
  <div class="desktop grid items-end">
    <div
      class="
        taskbar
        w-full
        h-8
        items-center
        flex flex-row
        px-1
        font-bold
        space-x-1
      "
    >
      <StartMenu />
      <div class="taskbar-item window px-2 flex space-around">
        Microsoft Internet Explorer
      </div>
      <div class="taskbar-clock items-center px-2 window-inset font-normal">
        {{ date }}
      </div>
    </div>
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
