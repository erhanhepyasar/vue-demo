<template>
    <div class="container">
            <app-header-bar :quoteCount="quotes.length" :maxQuote="maxQuote"></app-header-bar>
            <app-quote-entry @quoteAdded="addQuote"></app-quote-entry>
            <app-quotes :quotes="quotes" @quoteDeleted="deleteQuote"></app-quotes>
            <app-footer></app-footer>
    </div>
</template>

<script>
    import HeaderBar from './components/HeaderBar.vue'
    import QuoteEntry from './components/QuoteEntry.vue'
    import Quotes from './components/Quotes.vue'
    import Footer from './components/Footer.vue'
    
    export default {
        data: function() {
            return {
                quotes: [
                    'Just a Quote to start with something!'
                ],
                maxQuote: 10
            }
        },
        methods: {
            addQuote(newQuote) {
                if(this.quotes.length >= this.maxQuote) {
                    return alert('Too many Quotes! Delete some before adding new ones!');
                    
                }
                this.quotes.push(newQuote)
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1)
            }
        },
        components: {
            appHeaderBar: HeaderBar,
            appQuoteEntry: QuoteEntry,
            appQuotes: Quotes,
            appFooter: Footer
        }
    }
</script>

<style>

</style>
