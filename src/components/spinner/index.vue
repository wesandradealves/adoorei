<template>
    <div v-if="$store.state.isLoading" class="spinner d-flex align-items-center justify-content-center flex-column">
        <div class="lds-dual-ring"></div>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'app-spinner',
        // data() {
        //     return {
        //         s: '',
        //     }
        // },        
        // props: {
        //     placeholder: String,
        //     classes: String
        // }        
    }
</script>
<style src="./style.scss" lang="scss"></style>