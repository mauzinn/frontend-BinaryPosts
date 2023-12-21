<template>
    <section class="form-background">
        <headerAuthenticationVue />

        <h2 class="authentication-text">Entrar na conta</h2>

        <form class="form" @submit="LOGIN">

            <input type="text" class="input" v-model="name" placeholder="Name" required>

            <input type="password" class="input" v-model="password" placeholder="Password" required>

            <button class="authentication-button">Logar</button>
            <small class="redirect-small">Ainda não tem uma conta? <router-link to="/register">Clique aqui</router-link></small>
        </form>
    </section>
</template>

<script>
    import headerAuthenticationVue from '../components/headerAuthentication.vue'

    export default {
        name: 'login',
        components: {
            headerAuthenticationVue
        },
        data() {
            return {
                name: '',
                password: ''
            }
        },
        methods: {
            async LOGIN(e) {
                e.preventDefault()
                const URL = "http://localhost:3000/account/login"

                const request = await fetch(URL, {
                    method: 'POST',
                    body: JSON.stringify({
                        name: this.name,
                        password: this.password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(async(res) => {
                    const response = await res.json()

                    if (response.result) {
                        localStorage.setItem('x-access-token', response.token)

                        location.href = "http://localhost:8080/"
                    } else {
                        alert(response.error)
                    }
                })
            }
        }
    }
</script>