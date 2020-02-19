<template>
    <div id="app" class="h-screen flex">
        <side-bar></side-bar>
        <div class="flex-1 min-w-0 flex flex-col">
            <div class="flex-shrink-0 sm:border-b-2 sm:border-gray-200">
                <header>

                </header>
            </div>
            <div class="container mx-auto flex flex-col items-center">
                <h1>Liste des participants aux Human Talks Poitiers <span
                        class="text-sm text-gray-700">({{members.length}})</span></h1>
                <card v-for="member in members"
                      :key="member.id"
                      class="lg:w-1/2 mb-5"
                      :picture="member.photo"
                      :name="member.name"
                      :joined-date="member.joined"
                ></card>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from "./components/SideBar";
    import Card from './components/Card';

    export default {
        name: 'App',
        components: {
            SideBar,
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
