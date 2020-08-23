<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server  v-for="server in servers" 
                :server="server"></app-server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue'
    import ServerDetails from './ServerDetails.vue'
    import { eventBus } from '../../main'

    export default {
        components: {
            'app-server': Server,
            'app-server-details': ServerDetails
        },
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Active'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Down'}
                ]
            }
        },

        created() {
            eventBus.$on('resetClicked', (serverId) => {
                this.servers[serverId - 1].status = 'Normal';
            })
        }
    }
</script>

<style>

</style>
