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
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader
  },
  mounted() {
    const store = useStore()
    store.dispatch('GetAllProducts')
  },
}
</script>
<style src="./style.scss" lang="scss"></style>
