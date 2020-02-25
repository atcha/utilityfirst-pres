<template>
    <div id="app" class="h-screen flex">
        <side-bar></side-bar>
        <div class="flex-1 min-w-0 flex flex-col">
            <header-bar page-title="Liste des participants">
                <sort-bar></sort-bar>
            </header-bar>
            <div class="p-6 overflow-auto">
                <transition-group name="card-list" tag="div">
                    <card v-for="member in members"
                          :key="member.id"
                          class="lg:w-1/2 mb-5"
                          :picture="member.photo"
                          :name="member.name"
                          :joined-date="member.joined"
                    ></card>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBar from "./components/HeaderBar";
    import SideBar from "./components/SideBar";
    import Card from './components/Card';
    import SortBar from "./components/SortBar";
    import { mapState } from 'vuex';

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
        },
        data() {
            return {
                membersLength: null,
                isSideBarOpen: false
            }
        },
        computed: mapState(['members'])
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .card-list-move {
        transition: 700ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
        transition-property: opacity, transform;
    }
</style>
