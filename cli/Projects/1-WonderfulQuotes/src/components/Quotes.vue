<template>
    <div class="">
        <ul>
            <app-quote v-for="quote in quotes" :quote="quote"></app-quote>
        </ul>
    </div>
</template>

<script>
    import Quote from './Quote.vue'

    export default {
        components: {
            appQuote: Quote
        },
        data: function() {
            return {
                quotes: [
                    { id: 0, text: 'Just a Quote to start with something!'}
                ]
            }
        }
        
    }
</script>

<style scoped>
</style>
