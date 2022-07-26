<script setup>
import { ref } from 'vue';
import StartMenu from './StartMenu.vue';
import { useGlobalStore } from '../stores/global';

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

const openWindows = useGlobalStore().openWindows;

</script>
<template>

    <div class="
        taskbar
        w-full
        h-8
        items-center
        flex flex-row
        px-1
        font-bold
        space-x-1
      ">
        <StartMenu />
        <div class="taskbar-item window px-2 flex space-around capitalize window--active" v-for="window in openWindows" :key="window">
            {{ window.title}}
        </div>
        <div class="taskbar-clock items-center px-2 window-inset font-normal">
            {{ date }}
        </div>
    </div>
</template>

<style>
.window--active { 
    background: linear-gradient(to right, white 2px, gray 2px, gray 4px);
    background-repeat: repeat;
}
</style>