<template>
    <div class="flex-shrink-1 ml-3 relative w-64 lg:ml-0">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg fill="none" viewBox="0 0 24 24" class="h-6 w-6 text-gray-600">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-width="2"
                          stroke="currentColor"></path>
                </svg>
            </span>
        <input placeholder="Search"
               class="block w-full rounded-md border border-gray-400 pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-600">
    </div>
</template>

<script>
    export default {
        name: "SearchForm"
    }
</script>

<style scoped>

</style>