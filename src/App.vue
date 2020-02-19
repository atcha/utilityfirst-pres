<template>
    <div id="app" class="h-screen flex">
        <side-bar></side-bar>
        <div class="flex-1 min-w-0 flex flex-col">
            <header-bar page-title="Liste des participants"></header-bar>
            <div class="flex flex-col items-start pl-6 pt-6 overflow-auto">
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
    import HeaderBar from "./components/HeaderBar";
    import SideBar from "./components/SideBar";
    import Card from './components/Card';

    export default {
        name: 'App',
        components: {
            HeaderBar,
            SideBar,
            Card
        },
        mounted() {
            this.fetchData();
        },
        data() {
            return {
                members: [],
                membersLength: null,
                isSideBarOpen: false
            }
        },
        methods: {
            fetchData() {
                import('./data/members').then((results) => {
                    this.members = results.value;
                    this.membersLength = this.members.length;
                })
            },
            updateSideBarState(state) {
                this.isSideBarOpen = state;
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
