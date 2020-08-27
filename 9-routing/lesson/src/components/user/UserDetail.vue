<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded had ID: {{ $route.params.id }}</p>
        <router-link 
            tag="button" 
            class="btn btn-primary"
            :to="link">Edit User</router-link>
            <!-- :to="'/user/' + $route.params.id + '/edit'" -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: { 
                name: 'userEdit', 
                params: {
                    id: this.$route.params.id
                }, 
                query: {
                    locale: 'en', 
                    q: 100
                },
                hash: '#data'
            } 
        }
    },
    beforeRouteEnter(to, from, next) {
        if(true) {
            next()
        } else {
            console.log('beforeRouteEnter in UserDetail')
            next(false)
        }
    }
}
</script>
