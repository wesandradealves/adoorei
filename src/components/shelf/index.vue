<template>
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
            <ul class="d-flex col-12 flex-wrap product-carousel row p-0">
                <li class="single-product col-12 col-md-6 col-lg-4 align-items-stretch pb-4" v-for="item in shelf" :key="item.id">
                    <div class="product-f-image">
                        <img :src="item.image" :alt="item.description">
                        <div class="product-hover">
                            <router-link :class="'view-details-link'" :to="`/product/${item.id}`"><i class="fa fa-link"></i> See details</router-link>
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
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'app-shelf',
        props: {
            data: Object
        },
        data: function () {
            return {
                shelf: this.$props.data,
                filter: ''
            }
        },        
        methods: {
            sort(v) {
                if(v.target.value !== 'rating') {
                    if(v.target.value == 'title') {
                        this.shelf = this.shelf.sort((a, b) => a[v.target.value].localeCompare(b[v.target.value]))
                    } else {
                        this.shelf = this.shelf.sort((a,b) => a[v.target.value] - b[v.target.value])
                    }
                } else {
                    this.shelf = this.shelf.sort((a,b) => a.rating.rate - b.rating.rate)
                }
            }
        },
        watch: {
            '$props': {
                handler: function (prop) {
                    this.shelf = prop.data
                },
                deep: true,
                immediate: true
            }
        },        
    }
</script>
<style src="./style.scss" lang="scss"></style>