<template>
    <div class="fixed z-30 inset-y-0 left-0 w-64 px-8 py-4 bg-gray-100 border-r overflow-auto lg:static lg:inset-auto transform lg:translate-x-0 transition-medium"
         :class="[sideBarIsOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in']">
        <div class="-mx-3 pl-3 pr-1 flex items-center justify-between">
            <span><img alt="" src="../assets/logo.png" class="h-9 w-9"></span>
            <button class="text-gray-700 lg:hidden" @click="closeSideBar">
                <svg fill="none" viewBox="0 0 24 24" class="h-6 w-6">
                    <path d="M6 18L18 6M6 6L18 18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          stroke="currentColor"></path>
                </svg>
            </button>
        </div>
        <nav class="mt-8">
            <h3 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Participants</h3>
            <div class="mt-2 -mx-3">
                <side-bar-link title="Tous" number="30" :active="true"></side-bar-link>
                <side-bar-link title="Actifs" number="28"></side-bar-link>
                <side-bar-link title="Inactifs" number="2"></side-bar-link>
            </div>
            <h3 class="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">Talks</h3>
            <div class="mt-2 -mx-3">
                <side-bar-link title="A venir"></side-bar-link>
                <side-bar-link title="Passés"></side-bar-link>
            </div>
            <button class="mt-2 -ml-1 flex items-center text-sm font-medium text-gray-600">
                <svg fill="none" viewBox="0 0 24 24" class="h-5 w-5 text-gray-500">
                    <path d="M12 7v10m5-5H7" stroke-linecap="round" stroke-width="2" stroke="currentColor"></path>
                </svg>
                <span class="ml-1">Nouveau talk</span></button>
        </nav>
    </div>
</template>

<script>
    import SideBarLink from "./SideBarLink";
    import { mapState } from 'vuex'
    export default {
        name: "SideBar",
        components: {
            SideBarLink
        },
        methods: {
            closeSideBar() {
                this.$store.commit("changeSideBarState", false);
            }
        },
        computed: mapState(['sideBarIsOpen'])
    }
</script>

<style scoped>

</style>