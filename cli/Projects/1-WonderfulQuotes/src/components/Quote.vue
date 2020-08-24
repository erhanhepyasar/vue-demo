<template>
    <div class="box">
       {{ quote.text }}
    </div>
</template>

<script>
    export default {
        props: ['quote']
        
    }
</script>

<style scoped>
    .box {     
        border: 1px solid #eaeaea;
        border-radius: 3px;
        height: 80px;
        width: 300px;
        font-family: 'Tangerine', serif;
        font-size: 24px;
        text-shadow: 4px 4px 4px #aaa;
        
    }
</style>
