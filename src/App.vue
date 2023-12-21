<template>
  <router-view />
  <viewProjectButtonVue />
</template>

<script>
  import viewProjectButtonVue from './components/viewProjectButton.vue'

  export default {
    name: 'App',
    components: {
      viewProjectButtonVue
    }
  }
</script>

<style>
 *{
  margin: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 }
</style>