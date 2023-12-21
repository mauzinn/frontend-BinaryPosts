<template>
    <body class="center">
        <registerVue />
    </body>
</template>

<script>
    import registerVue from '../components/register.vue'

    export default {
        name: 'Register',
        components: {
            registerVue
        }
    }
</script>

<style>
    .center{
        height: 98vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>