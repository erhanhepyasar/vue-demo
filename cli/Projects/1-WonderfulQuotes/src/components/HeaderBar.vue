<template>
    <div class="row">
        <h3>Quotes Added</h3>
        <div class="outer-bar">
            <div v-if="quoteCount > 0" class="inner-bar" :style="{width: maxQuote * quoteCount + '%'}">
                {{ quoteCount }} / {{ maxQuote }}
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        props: ['quoteCount', 'maxQuote']

    }
</script>

<style scoped>
    .outer-bar {     
        border: 1px solid #eaeaea;
        border-radius: 3px;
        background-color: #f4f4f4;
    }

    .inner-bar {
        border: 1px solid #819daa;
        border-radius: 3px;
        background-color: #337bb8;
        color: white;
        text-align: center;
        transition: width 1s;
    }
    

</style>
