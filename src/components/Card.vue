<template>
    <div class="">
        <img class="" v-lazy="picture && picture.thumb_link ? picture.thumb_link : genericAvatar">
        <div class="">
            <h3 class="">{{ name }}</h3>
            <div class="">Membre depuis le {{ getDate }}</div>
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