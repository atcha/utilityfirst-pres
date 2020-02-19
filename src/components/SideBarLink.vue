<template>
    <a href="#" class="flex justify-between items-center px-3 py-2 hover:bg-gray-200 rounded-lg" :class="{ 'bg-gray-200': active }">
        <span class="text-sm font-medium text-gray-900">{{title}}</span>
        <span v-if="number" class="text-xs font-semibold text-gray-700">{{number}}</span>
    </a>
</template>

<script>
    export default {
        name: "SideBarLink",
        props: ["title", "number", "active"]
    }
</script>

<style scoped>

</style>