<template>
    <div class="row">
        <form>
            <label>Quote</label><br>
            <textarea rows="3" cols="80" v-model="newQuote" placeholder="Enter a new quote here"></textarea> <br>
            <button @click.prevent="addQuote" class="btn btn-primary">Add Quote</button>
        </form>
    </div>
</template>

<script>


    export default {
  
        data: function(){
            return {
                newQuote: ''
            }
        },
        methods: {
            addQuote() {
                this.$emit('quoteAdded', this.newQuote);
                this.newQuote = '';
            },

        }
        
    }
</script>

<style scoped>
    div {        
        padding-bottom: 20px;
    }
</style>>

