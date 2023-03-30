<template>
    <section class="product-big-title-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-bit-title text-center">
                        <h2>{{ title }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section> <!-- End Page title area -->
    <section class="maincontent-area">
        <div class="container pt-5">
            <span class="d-flex align-items-center">
                <p>Filtro: </p>
                <span class="select-style ms-3 mb-3">
                    <select class="filter" v-model="filter" @change="sort">
                        <option value="">Selecione uma opção</option>
                        <option value="title">Title</option>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                    </select>                    
                </span>
            </span>
            <ul class="d-flex flex-wrap product-carousel row p-0">
                <li class="single-product col-12 col-md-6 col-lg-4 align-items-stretch pb-4" v-for="item in shelf"
                    :key="item.id">
                    <div class="product-f-image">
                        <img :src="item.image" :alt="item.description">
                        <div class="product-hover">
                            <!-- <a :href="`#${item.id}`" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to
                                cart</a> -->
                            <router-link :class="'view-details-link'" :to="`/product/${item.id}`"><i
                                    class="fa fa-link"></i> See details</router-link>
                        </div>
                    </div>

                    <h2>
                        <router-link :to="`/product/${item.id}`">{{item.title}}</router-link>
                    </h2>

                    <div class="product-carousel-price">
                        <ins>${{item.price}}</ins>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import {
        useStore
    } from 'vuex'
    
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'app-category',
        data() {
            return {
                filter: '',
                title: ''
            }
        },
        beforeRouteUpdate(to) {
            let id = to.params.id;
            let category = this.$store.getters.categories.find((item) => item.uri == id);
            this.title = category.title;
            document.title = `${process.env.VUE_APP_TITLE} - ${this.title}`;
        },
        computed: {
            shelf() {
                const store = useStore()
                let category = store.getters.categories.find((item) => item.uri == this.$route.path.split('/category/')[
                    1]);
                if (store.state.products && store.state.products.filter((item) => item.category == category.title)) {
                    return store.state.products.filter((item) => item.category == category.title)
                }
                return []
            }
        },
        methods: {
            sort(v) {
                if (v.target.value !== 'rating') {
                    if (v.target.value == 'title') {
                        this.shelf = this.shelf.sort((a, b) => a[v.target.value].localeCompare(b[v.target.value]))
                    } else {
                        this.shelf = this.shelf.sort((a, b) => a[v.target.value] - b[v.target.value])
                    }
                } else {
                    this.shelf = this.shelf.sort((a, b) => a.rating.rate - b.rating.rate)
                }
            }
        },
        watch: {
            '$store.state.products': {
                handler: function (data) {
                    if(data && data.length) {
                        let id = this.$route.params.id;
                        let category = this.$store.getters.categories.find((item) => item.uri == id);
                        this.title = category.title;
                        document.title = `${process.env.VUE_APP_TITLE} - ${this.title}`;
                    }
                },
                deep: true,
                immediate: true
            }
        },         
    }
</script>
<style src="./style.scss" lang="scss"></style>