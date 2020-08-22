<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ myName }}</p>
        <p>Reverse name: {{ reverseName() }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    export default {
        props: {
            myName: { // parent -> child
                type: String,
                required: true
            },
            resetFn: Function // 2.callback (child -> parent)
        
        },
        methods: {
            reverseName() {
                return this.myName.split("").reverse().join("")
            },
            resetName() {
                this.myName = 'Max'
                this.$emit('nameWasReset', this.myName) // 1.custom event (child -> parent)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>