<template>
    <section class="form-background">
        <headerAuthenticationVue />

        <h2 class="authentication-text">Criar conta</h2>

        <form class="form" @submit="REGISTER">
            <input type="email" class="input" v-model="email" placeholder="Email" required>

            <input type="text" class="input" v-model="name" placeholder="Name" required>

            <input type="password" class="input" v-model="password" placeholder="Password" required>

            <button class="authentication-button">Criar</button>
            <small class="redirect-small">Já tem uma conta?<router-link to="/login">Clique aqui</router-link></small>
        </form>
    </section>
</template>

<script>
    import headerAuthenticationVue from '../components/headerAuthentication.vue'

    export default {
        name: 'register',
        components: {
            headerAuthenticationVue
        },
        data() {
            return {
                email: '',
                name: '',
                password: '',
                REGISTERLIMIT: false
            }
        },
        methods: {
            async REGISTER(e) {
                e.preventDefault()

                if (this.REGISTERLIMIT) {
                    return
                }

                this.REGISTERLIMIT = true
                const URL = "https://backend-binary-posts.vercel.app/account/create"

                const request = await fetch(URL, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: this.email,
                        name: this.name,
                        password: this.password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(async(res) => {
                    const response = await res.json()

                    if (response.result) {
                        alert('Conta criada com sucesso!')
                        this.email = ''
                        this.name = ''
                        this.password = ''

                        location.href = "https://frontend-binary-posts.vercel.app/login"
                    } else {
                        alert(response.error)
                    }
                })
            }
        }
    }
</script>

<style>
    :root {
        --background: #E3E3E3;
        --form: #F9F9F9;
        --inputBorder: #B1B1B1;
        --buttonColor: #32D285;
    }

    .form-background{
        background-color: var(--background);
        width: 400px;
        border-radius: 20px;
        border: 1px solid rgb(219, 219, 219);
        overflow: hidden;
    }

    .authentication-text{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 200;
        font-size: 28px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .form{
        background-color: var(--form);
        border-radius: 40px 40px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 60px 40px;
    }

    .input{
        font-size: 15px;
        background: none;
        outline: none;
        border: 1px solid var(--inputBorder);
        border-radius: 8px;
        width: 95%;
        padding: 18px 16px;
        margin-bottom: 20px;
    }

    .authentication-button{
        background-color: var(--buttonColor);
        border: none;
        border-radius: 10px;
        padding: 10px 30px;
        color: white;
        font-size: 22px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 100;
        cursor: pointer;
        margin-top: 30px;
    }

    .authentication-button:hover{
        transform: scale(105%);
        background-color: #1fc474;

        transition: .3s;
    }

    @media (max-width: 414px) {
        .form-background{
            border-radius: 0%;
            border: none;
            width: 100%;
            height: 100vh;
        }

        .form{
            border-radius: 0%;
            margin-top: auto;
        }
    }

    .redirect-small{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 200;
        color: rgb(88, 88, 88);
    }

    .redirect-small a{
        color: rgb(17, 176, 240);
    }
</style>