<template>
    <section class="product-big-title-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-bit-title text-center">
                        <h2>Shopping Cart</h2>
                    </div>
                </div>
            </div>
        </div>
    </section> <!-- End Page title area -->

    <section class="single-product-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="product-content-right">
                        <div class="woocommerce">
                            <div>
                                <table cellspacing="0" class="shop_table cart">
                                    <thead>
                                        <tr>
                                            <th class="product-remove">&nbsp;</th>
                                            <th class="product-thumbnail">&nbsp;</th>
                                            <th class="product-name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product-quantity">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="$store.state.cart && $store.state.cart.length">
                                        <tr v-for="item in $store.state.cart" :key="item.id" class="cart_item">
                                            <td class="product-remove">
                                                <a @click="$store.dispatch('removeFromCart', item)" title="Remove this item" class="remove" href="#">Remover</a>
                                            </td>

                                            <td class="product-thumbnail">
                                                <router-link :to="`/product/${item.id}`">
                                                    <img width="145" height="145"
                                                        :alt="item.title" class="shop_thumbnail"
                                                        :src="item.image">
                                                </router-link>
                                            </td>

                                            <td class="product-name">
                                                <router-link :to="`/product/${item.id}`">
                                                    {{ item.title }}
                                                </router-link>
                                            </td>

                                            <td class="product-price">
                                                <span class="amount">£{{ item.price }}</span>
                                            </td>

                                            <td class="product-quantity">
                                                <div class="quantity buttons_added">
                                                    <input @change="(e) => {
                                                        if(e.target.value == 0) removeProduct(item) 
                                                        else updateProduct(e, item)
                                                    }" type="number" size="4" class="input-text qty text"
                                                        title="Qty" :value="item.quantity" min="0" step="1">
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="actions" colspan="6">
                                                <input :disabled="!this.$store.state.cart.length" type="submit" value="Proceed to Checkout" name="proceed"
                                                    class="checkout-button button alt wc-forward">
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <tr>
                                            <td colspan="5">Carrinho Vazio</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="cart-collaterals">

                                <div class="cart_totals ">
                                    <h2>Cart Totals</h2>

                                    <table cellspacing="0">
                                        <tbody>
                                            <tr class="cart-subtotal">
                                                <th>Cart Subtotal</th>
                                                <td><span class="amount">£{{cartTotal}}</span></td>
                                            </tr>

                                            <tr class="shipping">
                                                <th>Shipping and Handling</th>
                                                <td>Free Shipping</td>
                                            </tr>

                                            <tr class="order-total">
                                                <th>Order Total</th>
                                                <td><strong><span class="amount">£{{cartTotal}}</span></strong> </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'app-cart',
        data() {
            return {
                cartTotal: 0,
            }
        },
        methods: {
            updateProduct(e, item) {
                this.$store.dispatch('addToCart', {
                    ...item,
                    quantity: e.target.value
                })
            },
            removeProduct(item) {
                this.$store.state.cart = this.$store.state.cart.filter(function(i) { return i.id !== item.id }) 
            }            
        },
        watch: {
            '$store.state.cart': {
                handler: function (data) {
                    const total = data.reduce((accumulator, object) => {
                        return accumulator + (object.price * object.quantity);
                    }, 0);                    

                    this.cartTotal = data ? parseFloat(total).toFixed(2) : 0
                },
                deep: true,
                immediate: true
            }
        }        
        // data() {
        //     return {
        //         post: null,
        //         quantity: 0
        //     }
        // },        
        // async beforeRouteEnter(to, from, next) {
        //     const response = await fetch(`${process.env.VUE_APP_BASE_API}/products/${to.params.id}`).then((res) => res.json())
        //     if(response) {
        //         next(vm => {
        //             vm.setData(response)
        //             document.title = `${process.env.VUE_APP_TITLE} - ${response.title}`;
        //         })
        //     }
        // },
        // async beforeRouteUpdate(to) {
        //     this.post = null

        //     try {
        //         const response = await fetch(`${process.env.VUE_APP_BASE_API}/products/${to.params.id}`).then((res) => res.json())
        //         if(response) this.post = response, document.title = `${process.env.VUE_APP_TITLE} - ${response.title}`;
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },        
        // methods: {
        //     setData(post) {
        //         this.post = post
        //     }
        // },
        // computed: {
        //     cartItem() {
        //         const store = useStore()
        //         const cartItem = store.state.cart.find((item) => item.id == this.post.id)
        //         return cartItem
        //     },
        //     category() {
        //         var slugify = require('slugify')

        //         return {
        //             title: this.post.category,
        //             uri: slugify(this.post.category)
        //         }
        //     }
        // }   
    }
</script>
<style src="./style.scss" lang="scss"></style>