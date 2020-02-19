<template>
    <div class="md:flex bg-white rounded-lg p-6 shadow">
        <img class="h-16 w-16 md:h-20 md:w-20 rounded-full mx-auto md:mx-0 md:mr-6" v-lazy="picture && picture.thumb_link ? picture.thumb_link : genericAvatar">
        <div class="flex flex-col justify-center text-center md:text-left">
            <h2 class="text-lg">{{ name }}</h2>
            <div class="text-purple-500">Membre depuis le {{ getDate }}</div>
        </div>
    </div>
</template>

<script>
    import avatar from '../assets/avatar.svg';
    export default {
        name: "Card",
        props: ["name", "picture", "joinedDate"],
        data() {
            return {
                genericAvatar: avatar
            }
        },
        computed: {
            getDate() {
                const correctDate = new Date(this.joinedDate);
                const options = {day: 'numeric', month: 'short', year: 'numeric'};
                return correctDate.toLocaleDateString('fr-FR', options);
            }
        }
    }
</script>

<style scoped>

</style>