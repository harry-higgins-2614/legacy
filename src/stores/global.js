import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return { 
        openWindows: [{title: "Internet Explorer"}, {title: "notepad"}],

    }
  },
})