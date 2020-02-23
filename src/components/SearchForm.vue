<template>
    <div class="flex-shrink-1 ml-3 relative w-64 lg:ml-0">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg fill="none" viewBox="0 0 24 24" class="h-6 w-6 text-gray-600">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-width="2"
                          stroke="currentColor"></path>
                </svg>
            </span>
        <input @input="searchMembers(searchValue)" placeholder="Search" v-model="searchValue"
               class="block w-full rounded-md border border-gray-400 pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-600">
    </div>
</template>

<script>
    export default {
        name: "SearchForm",
        data() {
            return {
                members: '',
                searchValue: ''
            }
        },
        created() {
            this.members = this.$store.state.members
        },
        methods: {
            searchMembers(searchValue) {
                if(searchValue.length === 0) this.$store.dispatch('fetchMembers');
                if(searchValue.length >= 1) {
                    let members = this.members.filter((obj) => {
                        return Object.keys(obj).some((key) => {
                            if(key !== 'photo') {
                                return obj[key].toUpperCase().includes(searchValue.toUpperCase());
                            }
                        });
                    });

                    this.$store.commit('setMembers', members);
                }
            }
        }
    }
</script>

<style scoped>

</style>