<template>
    <section class="center">
        <verifyVue />
        <h1 class="title-configurations title-principal">
            <span class="material-symbols-outlined">
            developer_mode
            </span>
            Binary-Posts
        </h1>
        <postsVue />
    </section>
</template>

<script>
    import postsVue from '../components/posts.vue'
    import verifyVue from '../components/verify.vue'

    export default {
        name: 'Home',
        components: {
            postsVue,
            verifyVue
        }
    }
</script>

<style>
    .title-principal{
        color: rgb(21, 197, 112);
        margin-bottom: 20px;
    }
</style>