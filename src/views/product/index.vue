<template>
    <section v-if="post" class="single-product-area pt-5 pb-5">
        <div class="container pb-5 pt-5">
            <div class="row">
                <div class="flex-fill">
                    <div class="product-content-right">
                        <app-breadcrumb :current="post.title"></app-breadcrumb>
                        
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="product-images">
                                    <div class="product-main-img">
                                        <img class="w-100" :src="post.image" alt="">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-sm-6 ps-sm-5">
                                <div class="product-inner">
                                    <h2 class="product-name mb-3 pb-0">{{post.title}}</h2>
                                    <p class="product-description">
                                        {{ post.description }}
                                    </p>
                                    <div class="product-inner-price">
                                        <ins>${{ post.price }}</ins> 
                                    </div>    
                                    
                                    <div class="cart d-flex align-items-stretch">
                                        <div class="quantity">
                                            <input v-model="quantity" type="number" size="4" class="h-100 input-text qty text" title="Qty" name="quantity" min="0" step="1">
                                        </div>
                                        <button 
                                        @click="$store.dispatch('addToCart', {
                                            ...post,
                                            quantity: quantity
                                        })" :disabled="!quantity" class="add_to_cart_button" type="submit">{{cartItem ? 'Atualizar' : 'Adicionar'}}</button>
                                        <button class="remove_from_cart_button" v-if="cartItem" @click="$store.dispatch('removeFromCart', post); quantity = 0">Remover do Carrinho</button>
                                    </div>   
                                    
                                    <div class="product-inner-category pt-3">
                                        <p>Category: <router-link :to="`/category/${category.uri}`">{{ category.title }}</router-link></p>
                                    </div>  
                                    
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </section>    
</template>

<script>
    import { useStore } from 'vuex'
    import AppBreadcrumb from '@/components/breadcrumb'

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'app-product',
        components: {
            AppBreadcrumb
        },
        data() {
            return {
                post: null,
                quantity: 0
            }
        },       
        watch: {
            '$data.quantity': {
                handler: function (quantity) {
                    let post = this.post;

                    if(quantity == 0 && post) this.$store.state.cart = this.$store.state.cart.filter(function(i) { return i.id !== post.id }) 
                },
                deep: true,
                immediate: true
            }
        },        
        async beforeRouteEnter(to, from, next) {
            const response = await fetch(`${process.env.VUE_APP_BASE_API}/products/${to.params.id}`).then((res) => res.json())
            if(response) {
                next(vm => {
                    vm.setData(response)
                    document.title = `${process.env.VUE_APP_TITLE} - ${response.title}`;
                })
            }
        },
        async beforeRouteUpdate(to) {
            this.post = null
            
            try {
                const response = await fetch(`${process.env.VUE_APP_BASE_API}/products/${to.params.id}`).then((res) => res.json())
                if(response) this.post = response, document.title = `${process.env.VUE_APP_TITLE} - ${response.title}`;
            } catch (error) {
                console.log(error)
            }
        },        
        methods: {
            setData(post) {
                this.post = post
            }
        },
        computed: {
            cartItem() {
                const store = useStore()
                const cartItem = store.state.cart.find((item) => item.id == this.post.id)
                return cartItem
            },
            category() {
                var slugify = require('slugify')

                return {
                    title: this.post.category,
                    uri: slugify(this.post.category)
                }
            }
        }   
    }
</script>
<style src="./style.scss" lang="scss"></style>