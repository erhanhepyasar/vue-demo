<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                        <!--
                        <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" 
                                id="fullName"  
                                class="form-control"
                                v-model="fullName"> 
                        </div>
                        -->
                        <app-fullname v-model="fullName"></app-fullname>
                        <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" 
                            id="email"  
                            class="form-control"
                            v-model="email">
                        </div>

                        <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" 
                            id="password" 
                            class="form-control"
                            v-model="password">
                        </div>
                        <div class="form-group">
                            <label>
                                <input type="radio" value="Yes" v-model="storeData">Yes
                            </label>
                            <label>
                                <input type="radio" value="No" v-model="storeData">No
                            </label>
                        </div>
                        <button type="submit" 
                                class="btn btn-primary"
                                @click.prevent="isSubmitted = true">Submit</button>
                 

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default" v-if="isSubmitted">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Fullname from './Fullname.vue'

    export default {
        data() {
            return {
                fullName: 'Erhan Hepyasar',
                password: '',
                email: '',
                storeData: 'Yes',
                isSubmitted: false
            }
        },

        components: {
            appFullname: Fullname
        }
    }
</script>

<style>
</style>
