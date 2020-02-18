<template>
    <div id="app" class="container mx-auto flex flex-col items-center">
        <h1>Liste des participants aux Human Talks Poitiers <span class="text-sm text-gray-700">({{members.length}})</span></h1>
        <card v-for="member in members"
              :key="member.id"
              class="lg:w-1/2 mb-5"
              :picture="member.photo"
              :name="member.name"
              :joined-date="member.joined"
        ></card>
    </div>
</template>

<script>
    import Card from './components/Card';


    export default {
        name: 'App',
        components: {
            Card
        },
        mounted() {
            this.fetchData();
        },
        data() {
            return {
                members: []
            }
        },
        methods: {
            fetchData() {
                import('./data/members').then((results) => {
                    this.members = results.value;
                })
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
