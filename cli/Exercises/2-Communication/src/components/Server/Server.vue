<template>
    <li class="list-group-item"  
        @click="showDetails">
        Server #{{ server.id }}
    </li>
</template>

<script>
    import { eventBus } from '../../main'

    export default {
        props: ['server'],
        methods: {
            showDetails(server) {
                eventBus.$emit('showDetailsClicked', this.server)
            }
        },     
    }
</script>