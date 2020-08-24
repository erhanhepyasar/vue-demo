<template>

    <div class="box" @click="quoteClicked">
        {{ quote.text }} 
    </div>
  
</template>

<script>
    import { quoteBus } from '../main'

    export default {
        props: ['quote'],
        methods: {
            quoteClicked() {
                quoteBus.$emit('quoteClicked', this.quote.id)
            }
        }
        
    }
</script>

<style scoped>
    .box {     
        border: 1px solid #eaeaea;
        border-radius: 3px;
        height: 80px;
        width: 300px;
        font-family: 'Arizona';
        font-size: 24px;
        text-shadow: 4px 4px 4px #aaa;
        cursor: pointer;    
        box-sizing: border-box;
        float: left;  
        margin: 5px;
        padding-left: 5px;
    }
    .box:hover {
        background-color: pink;
    }
</style>
