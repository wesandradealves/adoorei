<template>
    <div>
        <carousel :items-to-show="4" :wrap-around="true">
            <template #slides>
                <Slide v-for="item in $props.data" :key="item.id">
                    <div class="single-product">
                        <div class="product-f-image">
                            <img :src="item.image" :alt="item.description">
                            <div class="product-hover">
                                <a :href="`#${item.id}`" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to
                                    cart</a>
                                <a :href="`product/${item.id}`" class="view-details-link"><i class="fa fa-link"></i> See details</a>
                            </div>
                        </div>

                        <h2><a :href="`product/${item.id}`">{{item.title}}</a></h2>

                        <div class="product-carousel-price">
                            <ins>${{item.price}}</ins>
                        </div>
                    </div>
                </Slide>
            </template>
            <template #addons>
                <navigation />
                <!-- <pagination /> -->
            </template>
        </carousel>
    </div>
</template>

<script>
    import {
        Carousel,
        Slide,
        // Pagination,
        Navigation
    } from 'vue3-carousel'

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'app-products-carousel',
        components: {
            Carousel,
            Slide,
            // Pagination,
            Navigation,
        },
        props: {
            data: Object
        }
    }
</script>
<style src="./style.scss" lang="scss" scoped></style>