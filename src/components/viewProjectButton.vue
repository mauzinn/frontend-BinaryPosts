<template>
    <section>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <a href="https://github.com/mauzinn/frontend-BinaryPosts">
            <abbr title="Repository">
                <button class="project">
                    <span class="material-symbols-outlined">
                    code
                    </span>
                </button>
            </abbr>
        </a>
    </section>
</template>

<script>
    export default {
        name: 'openSourceButton'
    }
</script>

<style>
    .project{
        background-color: rgb(31, 32, 43);
        border: 1px solid rgb(228, 228, 228);
        color: white;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: fixed;
        bottom: 10px;
        left: 10px;
        cursor: pointer
    }
    
    .project:hover {
        transform: scale(105%);
        color: rgb(10, 127, 236);

        transition: 0.3s;
    }
</style>