<template>
    <div id="app" class="container mx-auto flex flex-col items-center">
        <h1>Liste des participants aux Human Talks Poitiers</h1>
        <card class="lg:w-1/2"
              name="Erin Lindford"
              role="Customer Support"
              mail="erinlindford@example.com"
              phone="(555) 765-4321"></card>
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
                siteUrl: "https://www.meetup.com/fr-FR/Human-Talks-Poitiers/members/",
                siteResult: {}
            }
        },
        methods: {
            fetchData() {
                fetch("https://www.meetup.com/fr-FR/Human-Talks-Poitiers/members/",
                    {
                        method: 'GET',
                        mode: 'no-cors'
                    })
                    .then((response) => {
                        return response.text();
                        // cheerio.load(result.data);
                    }).then((html) => {
                        console.log(html);
                    });

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
