<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server">Server#{{ server.id }} - {{ server.status }}</p>
        <p v-else>Server Details are currently not updated</p>
        <button @click="reset">Reset</button>
    </div>

</template>

<script>
    import { eventBus } from '../../main'; 

    export default {
        props: ['server'],
        methods: {
            reset() { 
                eventBus.$emit('resetClicked', this.server.id)
            }
        },
        created() {
            eventBus.$on('showDetailsClicked', (server) => {
                this.server = server;
            })
        }

    }
</script>

<style>

</style>
