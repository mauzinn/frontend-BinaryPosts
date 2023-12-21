<template>
  <router-view />
  <openSourceButtonVue />
</template>

<script>
  import openSourceButtonVue from './components/openSourceButton.vue'

  export default {
    name: 'App',
    components: {
      openSourceButtonVue
    }
  }
</script>

<style>
 *{
  margin: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 }
</style>