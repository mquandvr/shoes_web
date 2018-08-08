<template>
    <div> Hello World
        <button @click="doLogin"> Login </button>
     </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        doLogin() {
            this.$router.push({
                name: 'Login'
            })
        }
    }
}
</script>
