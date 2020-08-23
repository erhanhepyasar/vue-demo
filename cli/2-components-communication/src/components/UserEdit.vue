<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 30;
                // this.$emit('ageWasEdited', this.userAge) // emit custom event
                // eventBus.$emit('ageWasEdited', this.userAge) // emit with event bus instance
                eventBus.changeAge(this.userAge) // call method in the event bus instance
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>