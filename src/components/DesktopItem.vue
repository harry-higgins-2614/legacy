<script setup>
import {ref} from "vue"
const props = defineProps(['icon', 'title'])

const active = ref(false);

const activate = () => active.value = true;

const open = () => console.log("OPEN")

</script>

<template>
 <div class="w-[72px] h-20 items-center grid place-items-center cursor-pointer" @dblclick="open" @click="activate" v-outside-click="() => active = false">
      <div class="desktop-item__icon h-10">
        <img :src="props.icon" alt="">
      </div>
      <div class="text-white capitalize w-[100%] text-center border border-dotted text-sm" :class="active ? 'border-white' : 'border-transparent'">
        {{ props.title }}
      </div>
    </div>
</template>