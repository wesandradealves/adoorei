<template>
    <Header>
        <div class="header-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="user-menu">
                            <ul>
                                <li><a href="#"><i class="fa fa-user"></i> My Account</a></li>
                                <li><a href="#"><i class="fa fa-heart"></i> Wishlist</a></li>
                                <li><a href="cart.html"><i class="fa fa-user"></i> My Cart</a></li>
                                <li><a href="checkout.html"><i class="fa fa-user"></i> Checkout</a></li>
                                <li><a href="#"><i class="fa fa-user"></i> Login</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="header-right">
                            <ul class="list-unstyled list-inline">
                                <li class="dropdown dropdown-small">
                                    <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle"
                                        href="#"><span class="key">currency :</span><span class="value">USD </span><b
                                            class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">USD</a></li>
                                        <li><a href="#">INR</a></li>
                                        <li><a href="#">GBP</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown dropdown-small">
                                    <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle"
                                        href="#"><span class="key">language :</span><span class="value">English
                                        </span><b class="caret"></b></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">French</a></li>
                                        <li><a href="#">German</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- End header area -->

        <div class="site-branding-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-4">
                        <div class="logo">
                            <h1>
                                <router-link :class="'logo'" to="/">
                                    <!-- e<span>Electronics</span> -->
                                    <img src="/assets/img/LOGO-ADOREI.svg" alt="">
                                </router-link>
                            </h1>
                        </div>
                    </div>
                    <app-searchbar :classes="'col-sm-4 d-none d-lg-flex justify-content center align-items-center'" :placeholder="'Digite sua busca...'"></app-searchbar>
                    <!-- <div class="col-sm-4 d-flex flex-column justify-content center align-items-center">
                        asdsad
                    </div> -->
                    <div class="ms-auto col-sm-4">
                        <div class="shopping-item m-0">
                            <router-link :class="'cart-link'" to="/cart"><span class="cart-amunt">${{ cartTotal }}</span> <i
                                    class="fa fa-shopping-cart"></i> <span
                                    class="product-count">{{ $store.state.cart.length }}</span></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- End site branding area -->

        <div class="mainmenu-area">
            <div class="container">
                <div class="row">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav w-100 d-flex flex-row flex-wrap">
                            <li class="flex-fill text-center">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li class="flex-fill text-center" v-for="category in $store.getters.categories"
                                :key="category">
                                <router-link :to="`/category/${category.uri}`">{{category.title}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> <!-- End mainmenu area -->
    </Header>
</template>

<script>
    import AppSearchbar from '@/components/searchbar'

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'app-header',
        data() {
            return {
                cartTotal: 0,
            }
        },
        components: {
            AppSearchbar
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
    }
</script>
<style src="./style.scss" lang="scss"></style>