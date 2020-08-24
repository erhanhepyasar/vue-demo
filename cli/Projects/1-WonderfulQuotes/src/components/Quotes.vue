<template>
    <div class="row">        
            <app-quote v-for="quote in quotes" :quote="quote"></app-quote>        
    </div>
</template>

<script>
    import Quote from './Quote.vue'
    import { quoteBus } from '../main';

    export default {
        components: {
            appQuote: Quote
        },
        data: function() {
            return {
                quotes: [
                    {id: 0, text:'Just a Quote to start with something!'}
                ]
            }
        },
        created() {
            quoteBus.$on('addQuoteClicked', (newQuote) => {
                this.quotes.push({id:this.quotes.length, text: newQuote})
            });

             quoteBus.$on('quoteClicked', (quoteId) => {
                 if(this.quotes.length > 1) {
                     this.quotes.splice(quoteId, 1)
                 }
            })
        }
        
    }
</script>

<style scoped>
    div {        
        padding-bottom: 50px;
    }
</style>
