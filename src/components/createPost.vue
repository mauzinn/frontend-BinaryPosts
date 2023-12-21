<template>
    <section class="background-post">
        <h2 class="title-configurations">Criar post</h2>
        <form class="postForm" @submit="POST_CREATE">
            <input type="text" class="input" maxlength="100" v-model="title" placeholder="Title" required>

            <input type="text" class="input" maxlength="200" v-model="subtitle" placeholder="Subtitle" required>

            <textarea type="text" class="input textarea" maxlength="600" v-model="text" placeholder="Text" required></textarea>

            <abbr title="Adicionar imagem a postagem">
                <label class="file">
                    <input type="file" class="input-file" required>
                    <span class="material-symbols-outlined">
                    image
                    </span>
                </label>
            </abbr>

            <div class="center-button">
                <button class="authentication-button">Criar</button>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: "createPost",
        data() {
            return {
                title: "",
                subtitle: "",
                text: ""
            }
        },
        methods: {
            async POST_CREATE(e) {
                e.preventDefault()
                let created = false

                if (created) {
                    return
                }

                created = true
                const URL = "https://backend-binary-posts.vercel.app/post/create"

                const formData = new FormData()
                formData.append("title", this.title)
                formData.append("subtitle", this.subtitle)
                formData.append("text", this.text)
                formData.append("token", localStorage.getItem('x-access-token'))
                formData.append("image", e.srcElement[3].files[0])
                formData.append("by", this.$store.state.name)

                const request = await fetch(URL, {
                    method: "POST",
                    body: formData
                }).then(async(res) => {
                    const response = await res.json()

                    if (response.result) {
                        location.reload()
                    } else {
                        alert(response.error)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .authentication-button{
        margin: 0;
    }

    .title-configurations {
        text-align: center;
        margin-bottom: 20px;
    }

    abbr{
        text-decoration: none;
    }
</style>

<style>
    .background-post{
        background-color: whitesmoke;
        border: 1px solid grey;
        border-radius: 0px 0px 16px 16px;
        padding: 20px;
        position: absolute;
        top: 0%;
        transform: translate(-50%, 0%);
        left: 50%;
        width: 600px;
        z-index: 4;
    }

    .input-file{
        display: none;
    }

    .file{
        color: white;
        background-color: rgb(37, 39, 53);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px;
        border-radius: 50%;
        width: 25px;
        margin-bottom: 10px;
        cursor: pointer;
    }

    .file:hover{
        transform: scale(105%);

        transition: .3s;
    }

    .textarea{
        resize: none;
        height: 60px;
    }

    .center-button{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media (max-width: 611px) {
        .background-post{
            width: 86%;
            height: 100%;
            position: absolute;
            top: 0%;
            border: none;
            border-radius: 0;
            left: 0;
            transform: translate(0%, 0%);
        }

        .postForm{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .input{
            width: 85%;
        }
    }
</style>