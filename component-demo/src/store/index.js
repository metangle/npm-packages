import { defineStore } from 'pinia'

export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        toolsList: []
    }),
    getters: {
        status() {
            const mainStore = useMainStore()
            const { toolsList } = mainStore
            return {
                isRealtimePreview: toolsList['RealtimePreview'].isActive,
                isPreview: toolsList['Preview'].isActive,
                isAutoScroll: toolsList['AutoScroll'].isActive,
                isFullScreen: toolsList['FullScreen'].isActive
            }
        }
    }
})