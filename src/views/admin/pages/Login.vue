<template>

<div class="app flex-row align-items-center">
    <div class="container">
        <b-row class="justify-content-center">
            <b-col md="8">
                <b-card-group>
                    <b-card no-body class="p-4">
                        <b-card-body>
                            <b-form>
                                <h1>Login</h1>
                                <p class="text-muted">Sign In to your account</p>
                                <b-input-group class="mb-3">
                                    <b-input-group-prepend>
                                        <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                                    </b-input-group-prepend>
                                    <b-form-input type="text" class="form-control" placeholder="Username" autocomplete="username email" v-model="username" />
                                </b-input-group>
                                <b-input-group class="mb-4">
                                    <b-input-group-prepend>
                                        <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                                    </b-input-group-prepend>
                                    <b-form-input type="password" class="form-control" placeholder="Password" autocomplete="current-password" v-model="password" />
                                </b-input-group>
                                <b-row>
                                    <b-col cols="6">
                                        <b-button variant="primary" class="px-4" @click="doLogin">Login</b-button>
                                    </b-col>
                                    <b-col cols="6" class="text-right">
                                        <b-button variant="link" class="px-0">Forgot password?</b-button>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </b-card-body>
                    </b-card>
                    <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
                        <b-card-body class="text-center">
                            <div>
                                <h2>Sign up</h2>
                                <p>Please sign up an account if you have not had one before you can act anything.</p>
                                <b-button variant="primary" class="active mt-3" @click="doRegister">Register Now!</b-button>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
    </div>
</div>

</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
                const {
                    username, password
                } = this
                this.$store.dispatch('doLogin', {
                        username, password
                    })
                    .then(() => {
                        if (this.$route.query.redirect) {
                            this.$router.push(this.$route.query.redirect)
                        } else {
                            this.$router.push('/')
                        }
                    })
                    .catch(err => console.log(err))
            },
            doRegister() {
                this.$router.push({
                    name: 'Register'
                })
            }
    }
}

</script>
