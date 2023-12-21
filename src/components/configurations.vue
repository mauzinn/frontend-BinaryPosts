<template>
    <section class="configurations">
        <button class="button-open" @click="CREATEPOST_SHOW" v-show="CREATEPOST">
            <span class="material-symbols-outlined">
            navigate_before
            </span>
        </button>
        
        <section>
            <h2 class="title-configurations">
                <span class="material-symbols-outlined">
                settings
                </span>
                Configurations
            </h2>

            <ul class="navigator">
                <li class="logout" @click="LOGOUT">
                    <span class="material-symbols-outlined">
                    logout
                    </span>
                    Logout
                </li>
            </ul>
        </section>
        
        <button class="create-button" @click="CREATEPOST_SHOW">
            <span class="material-symbols-outlined">
            add
            </span>
            Create
        </button>
    </section>
    <createPostVue v-show="CREATEPOST" />
</template>

<script>
    import createPostVue from './createPost.vue'

    export default {
        name: 'configurations',
        components: {
            createPostVue
        },
        data() {
            return {
                CREATEPOST: false
            }
        },
        methods: {
            CREATEPOST_SHOW() {
                this.CREATEPOST = !this.CREATEPOST
            },
            LOGOUT() {
                localStorage.removeItem('x-access-token')
                location.reload()
            }
        }
    }
</script>

<style>
    .configurations{
        width: 300px;
        height: 95%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border-right: 1px solid grey;
        color: white;
        background-color: #1E242E;
    }

    .navigator{
        list-style-type: none;
        text-align: left;
        padding: 20px 5px;
    }

    .logout{
        color: rgb(216, 3, 3);
    }

    .give-admin{
        color: rgb(32, 32, 48);
    }

    .navigator li{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 100;
        font-size: 22px;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .navigator li:hover{
        transform: scale(102%);

        transition: .3s;
        text-decoration: underline;
    }

    .title-configurations{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 100;
        font-size: 34px;
    }

    .create-button{
        background-color: #08BE3B;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 10px 24px;
        font-size: 22px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 100;
        border-radius: 16px;
        cursor: pointer;
        border: none;
    }

    .create-button:hover{
        transform: scale(105%);
        
        transition: .3s;
    }

    @media (max-width: 510px) {
        .configurations{
            position: absolute;
            width: 86%;
            height: 96%;
            border: none;
            top: 0;
        }
    }
</style>