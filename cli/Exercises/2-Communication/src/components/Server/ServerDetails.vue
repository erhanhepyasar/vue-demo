<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server">Server#{{ server.id }} selected, Status: {{ server.status }}</p>
        <p v-else>Server Details are currently not updated</p>
        <hr>
        <button @click="resetStatus">Reset Status</button>
    </div>

</template>

<script>
    import { serverBus } from '../../main'; 

    export default {
        props: ['server'],
        methods: {
            resetStatus() { 
                // serverBus.$emit('resetStatusClicked', this.server.id)
                this.server.status = 'Normal'  // server is an object which is passed by reference so changes made here effects original memory area
            }
        },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            })
        }

    }
</script>

<style>

</style>
