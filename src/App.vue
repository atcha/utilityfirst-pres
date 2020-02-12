<template>
    <div id="app" class="container mx-auto flex">
        <user-card class="lg:w-1/2"></user-card>
    </div>
</template>

<script>
    import UserCard from './components/UserCard'

    export default {
        name: 'App',
        components: {
            UserCard
        },
        
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
