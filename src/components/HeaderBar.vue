<template>
    <div class="flex-shrink-0 sm:border-b-2 sm:border-gray-200 bg-white">
        <header>
            <div class="px-4 sm:px-6">
                <div class="flex justify-between items-center py-3 border-b border-gray-200">
                    <div class="flex-1 min-w-0 flex">
                        <button class="text-gray-600 lg:hidden" @click="openSideBar">
                            <svg fill="none" viewBox="0 0 24 24" class="h-6 w-6">
                                <path d="M4 6h16M4 12h16M4 18h7" stroke-linecap="round" stroke-width="2" stroke="currentColor"></path>
                            </svg>
                        </button>
                        <search-form></search-form>
                    </div>
                </div>
                <div class="flex items-center justify-between py-2">
                    <div class="sm:flex sm:items-center">
                        <h2 class="text-2xl font-semibold text-primary leading-tight">
                            {{pageTitle}}
                        </h2>
                        <div class="mt-1 flex items-center sm:mt-0 sm:ml-6"></div>
                    </div>
                    <div class="flex">
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    import SearchForm from "./SearchForm";
    export default {
        name: "HeaderBar",
        components: { SearchForm },
        props: ['pageTitle'],
        methods: {
            openSideBar() {
                this.$store.commit("changeSideBarState", true);
            }
        }
    }
</script>

<style scoped>

</style>