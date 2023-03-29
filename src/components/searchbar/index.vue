<template>
    <aside class="searchbar p-3 d-flex flex-wrap align-items-center justify-content-center" :class="$props.classes">
        <input v-model="s" type="text" class="col-11 p-0 m-0">
        <button @click="(e) => $router.push({ name: 'Search', params: { s: s } })" class="flex-fill p-0 m-0"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
    </aside>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'app-searchbar',
        data() {
            return {
                s: '',
            }
        },        
        props: {
            placeholder: String,
            classes: String
        }        
    }
</script>
<style src="./style.scss" lang="scss"></style>