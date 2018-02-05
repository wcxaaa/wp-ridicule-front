<template>
  <section class="app">
    {{ msg }}
  </section>
</template>



<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'app'
})
export default class App extends Vue {
  msg: string = 'Welcome to wp-ridicule-front!'
}
</script>

<style>

</style>
