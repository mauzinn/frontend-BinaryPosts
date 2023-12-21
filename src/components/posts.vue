<template>
    <section class="table">
        <div v-show="SHOW_CONFIG" class="config-show">
            <configurationsVue />
        </div>

        <button class="button-open" @click="OPEN_CONFIG">
            <span class="material-symbols-outlined">
            {{BUTTON_ROUND}}
            </span>
        </button>

        <section class="posts">


            <article class="post" v-for="post in posts" :key="post.id">
                <div>
                    <small>By: {{post.by}}</small>
                    <h2>{{post.title}}</h2>
                    <h4>{{post.subtitle}}</h4>
                    <img :src="post.src">
                    <p>{{post.text}}</p>
                </div>

                <button v-show="$store.state.role == 'admin'" @click="DELETE_POST_AS_ADMIN(post._id)">
                    <span class="material-symbols-outlined">
                    delete
                    </span>
                </button>
            </article>


        </section>
    </section>
</template>

<script>
    import configurationsVue from './configurations.vue'

    export default {
        name: 'posts',
        components: {
            configurationsVue
        },
        data() {
            return {
                posts: [],
                SHOW_CONFIG: true,
                BUTTON_ROUND: "navigate_next"
            }
        },
        async created() {
            if (window.innerWidth < 1211) {
                this.SHOW_CONFIG = false
            } else {
                this.SHOW_CONFIG = true
            }

            window.addEventListener('resize', () => {
                if (window.innerWidth < 1211) {
                    this.SHOW_CONFIG = false
                } else {
                    this.SHOW_CONFIG = true
                }
            })

            const URL = "http://localhost:3000/post/read"

            const request = await fetch(URL, {
                method: "POST",
                body: JSON.stringify({
                    token: localStorage.getItem('x-access-token')
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async(res) => {
                const response = await res.json()

                if (response.result) {
                    this.posts = response.posts
                }
            })
        },
        methods: {
            OPEN_CONFIG() {
                const Rounds = ["navigate_next", "navigate_before"]
                if (this.BUTTON_ROUND == Rounds[0]) {
                    this.BUTTON_ROUND = Rounds[1]
                } else {
                    this.BUTTON_ROUND = Rounds[0]
                }

                this.SHOW_CONFIG = !this.SHOW_CONFIG
            },
            async DELETE_POST_AS_ADMIN(_id) {
                const URL = "http://localhost:3000/post/delete"

                const request = await fetch(URL, {
                    method: 'POST',
                    body: JSON.stringify({
                        id: _id,
                        token: localStorage.getItem("x-access-token")
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(async(res) => {
                    const response = await res.json()

                    if (response.result) {
                        alert("Post apagado com sucesso!")

                        location.reload()
                    } else {
                        alert(response.error)
                    }
                })
            }
        }
    }
</script>

<style>
    .table{
        width: 1200px;
        height: 800px;
        display: flex;
        border: 1px solid grey;
        border-radius: 0px 20px 20px 0px;
    }

    .posts{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: auto;
    }

    .button-open{
        position: absolute;
        top: 10px;
        left: 10px;
        display: none;
        justify-content: center;
        align-items: center;
        padding: 15px 15px;
        border-radius: 50%;
        background-color: #42b883;
        color: white;
        border: none;
        z-index: 2;
    }

    .button-open:hover{
        transform: scale(105%);

        transition: .3s;
    }

    .post{
        width: 90%;
        border-radius: 10px;
        background-color: rgb(240, 240, 240);
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 20px;
    }

    .post small {
        color: grey;
    }

    .post h2 {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 100;
        font-size: 28px;
    }

    .post h4{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
        margin-bottom: 25px;
    }

    .post img{
        max-width: 60%;
    }

    .post button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 10px;
        border-radius: 10px;
        background: none;
        color: rgb(235, 1, 1);
        border: 1px solid currentColor;
        cursor: pointer;
    }

    .post button:hover{
        color: rgb(218, 2, 2);
        transform: scale(105%);
        transition: 0.3s;
    }

    @media (max-width: 1211px) {
        .table{
            width: 100%;
            border: none;
            border-radius: 0px;
            height: 90%;
        }

        .post{
            width: 85%;
        }

        .button-open{
            display: flex;
        }
    }
</style>