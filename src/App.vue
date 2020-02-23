<template>
    <div id="app" class="h-screen flex">
        <side-bar></side-bar>
        <div class="flex-1 min-w-0 flex flex-col">
            <header-bar page-title="Liste des participants">
                <sort-bar></sort-bar>
            </header-bar>
            <div class="p-6 flex flex-col items-stretch lg:items-start overflow-auto">
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
    import SortBar from "./components/SortBar";

    export default {
        name: 'App',
        components: {
            HeaderBar,
            SideBar,
            Card,
            SortBar
        },
        created() {
            this.$store.dispatch('fetchMembers');
            this.members = this.$store.state.members;
        },
        mounted() {
          console.log(this.members);
        },
        data() {
            return {
                members: [],
                membersLength: null,
                isSideBarOpen: false
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
