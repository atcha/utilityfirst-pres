<template>
    <div class="md:flex bg-white rounded-lg p-6 shadow">
        <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="../assets/avatar.svg">
        <div class="text-center md:text-left">
            <h2 class="text-lg">{{ name }}</h2>
            <div class="text-purple-500">{{ role }}</div>
            <div class="text-gray-600">{{ mail }}</div>
            <div class="text-gray-600">{{ phone }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: ["name", "role", "mail", "phone"]
    }
</script>

<style scoped>

</style>