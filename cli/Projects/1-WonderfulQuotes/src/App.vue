<template>
    <div class="container">
        <app-header-bar></app-header-bar>
        <app-quote-entry></app-quote-entry>
        <app-quotes></app-quotes>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import HeaderBar from './components/HeaderBar.vue'
    import QuoteEntry from './components/QuoteEntry.vue'
    import Quotes from './components/Quotes.vue'
    import Footer from './components/Footer.vue'
    
    export default {
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
