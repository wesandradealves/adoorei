<template>
    <nav class="product-content-right">
        <div class="product-breadcroumb pb-5">
            <router-link to="/">Home</router-link>
            <a href="">{{$props.current}}</a>
        </div>
    </nav>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'app-breadcrumb',
        props: {
            current: String
        }
    }
</script>
<style src="./style.scss" lang="scss"></style>