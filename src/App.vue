<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }}</template>
  </metainfo>
  <app-header></app-header>  
  <main>
    <router-view />
  </main>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from './components/header'
import AppFooter from './components/footer'

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader
  }
}
</script>
<style src="./style.scss" lang="scss"></style>
