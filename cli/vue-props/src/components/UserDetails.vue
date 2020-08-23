<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ myName }}</p>
        <p>Reverse name: {{ reverseName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: {
            myName: { // parent -> child
                type: String,
                required: true
            },
            resetFn: Function, // 2.callback (child -> parent)
            userAge: Number
        
        },
        methods: {
            reverseName() {
                return this.myName.split("").reverse().join("")
            },
            resetName() {
                this.myName = 'Max'
                this.$emit('nameWasReset', this.myName) // 1.emit a custom event (child -> parent)
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>