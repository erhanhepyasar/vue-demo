<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            counter: 0
        }
    },
    destroyed() {
        console.log('Destroyed! - New Component')
    },
    deactivated() {
        console.log('Deactivated! - New Component')
    },
    activated() {
        console.log('Activated! - New Component')
    }

    
}
</script>

<style scoped>

</style>