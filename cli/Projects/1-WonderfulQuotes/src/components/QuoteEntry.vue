<template>
    <div>
        <h4>Quote</h4>
        <textarea rows="3" cols="80" v-model="newQuote" placeholder="Enter a new quote here"></textarea> <br>
        <button v-if="isButtonShowOK()" @click="addQuote">Add Quote</button>
    </div>
</template>

<script>
    import { quoteBus } from '../main';

    export default {
        data: function(){
            return {
                newQuote: '',
                totalQuote: 1
            }
        },
        methods: {
            addQuote() {
                if(this.totalQuote >= 10) {
                    alert('Too many Quotes! Delete some before adding new ones!');
                    return;
                }
                quoteBus.$emit('addQuoteClicked', this.newQuote);
                this.newQuote = '';
            },

            isButtonShowOK() {
                return this.newQuote != '' && this.totalQuote <= 10
            }
        },

        created() {
            quoteBus.$on('addQuoteClicked', () =>{
                this.totalQuote++;
            }),
            
            quoteBus.$on('quoteClicked', () =>{
                if(this.totalQuote > 1) {
                    this.totalQuote--;
                }
            })
        }
        
    }
</script>

<style scoped>
    div {        
        padding-bottom: 20px;
    }
</style>>

