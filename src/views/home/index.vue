<template>
    <section class="slider-area">
        <div id="slide-list" class="carousel carousel-fade slide" data-ride="carousel">

            <div class="slide-bulletz">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ol class="carousel-indicators slide-indicators">
                                <li data-target="#slide-list" data-slide-to="0" class="active"></li>
                                <li data-target="#slide-list" data-slide-to="1"></li>
                                <li data-target="#slide-list" data-slide-to="2"></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <div class="single-slide">
                        <div style="background-image: url('/assets/img/slide-2.jpg');" class="slide-bg slide-one"></div>
                        <div class="slide-text-wrapper">
                            <div class="slide-text">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-6 col-md-offset-6">
                                            <div class="slide-content">
                                                <h2>We are awesome</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Consequuntur, dolorem, excepturi. Dolore aliquam quibusdam ut quae
                                                    iure vero exercitationem ratione!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ab
                                                    molestiae minus reiciendis! Pariatur ab rerum, sapiente ex nostrum
                                                    laudantium.</p>
                                                <a href="" class="readmore">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="single-slide">
                        <div style="background-image: url('/assets/img/slide-3.jpg');" class="slide-bg slide-two"></div>
                        <div class="slide-text-wrapper">
                            <div class="slide-text">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-6 col-md-offset-6">
                                            <div class="slide-content">
                                                <h2>We are great</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                                                    aspernatur, dolorum harum molestias tempora deserunt voluptas
                                                    possimus quos eveniet, vitae voluptatem accusantium atque deleniti
                                                    inventore. Enim quam placeat expedita! Quibusdam!</p>
                                                <a href="" class="readmore">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="single-slide">
                        <div style="background-image: url('/assets/img/slide-1.jpg');" class="slide-bg slide-three"></div>
                        <div class="slide-text-wrapper">
                            <div class="slide-text">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-6 col-md-offset-6">
                                            <div class="slide-content">
                                                <h2>We are superb</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
                                                    eius?</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
                                                    voluptates necessitatibus dicta recusandae quae amet nobis sapiente
                                                    explicabo voluptatibus rerum nihil quas saepe, tempore error odio
                                                    quam obcaecati suscipit sequi.</p>
                                                <a href="" class="readmore">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section> <!-- End slider area -->

    <section class="promo-area">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="single-promo">
                        <i class="fa fa-refresh"></i>
                        <p>30 Days return</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-promo">
                        <i class="fa fa-truck"></i>
                        <p>Free shipping</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-promo">
                        <i class="fa fa-lock"></i>
                        <p>Secure payments</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-promo">
                        <i class="fa fa-gift"></i>
                        <p>New products</p>
                    </div>
                </div>
            </div>
        </div>
    </section> <!-- End promo area -->    

    <section class="maincontent-area">
        <div class="container pt-5">
            <ul class="d-flex flex-wrap product-carousel row p-0">
                <li class="single-product col-12 col-md-6 col-lg-4 align-items-stretch pb-4" v-for="item in $store.state.products" :key="item.id">
                    <div class="product-f-image">
                        <img :src="item.image" :alt="item.description">
                        <div class="product-hover">
                            <!-- <a :href="`#${item.id}`" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to
                                cart</a> -->
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
        name: 'app-home'      
    }
</script>
<style src="./style.scss" lang="scss"></style>