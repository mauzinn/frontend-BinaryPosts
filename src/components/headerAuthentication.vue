<template>
    <header class="header">
        <section class="circle">
            <h2>
                <span class="material-symbols-outlined">
                developer_mode
                </span>
                Binary-Posts
            </h2>
        </section>
    </header>
</template>

<script>
    export default {
        name: 'headerAuthentication'
    }
</script>

<style>
    :root {
        --backgroundHeader: #32D285;
    }

    .header{
        width: 100%;
        overflow: hidden;
        height: 200px;
        position: relative;
    }

    .circle{
        height: 100%;
        width: 100%;
        border-radius: 0% 0% 50% 50%;
        background-color: var(--backgroundHeader);
        position: absolute;
        top: 0%;
    }

    .circle h2{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 100;
        color: rgb(248, 248, 248);
        margin: 10px;
        font-size: 28px;
    }
</style>