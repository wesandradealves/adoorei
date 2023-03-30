<template>
    <section class="product-big-title-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-bit-title text-center">
                        <h2>Você está procurando por "{{ $route.params.s }}"</h2>
                    </div>
                </div>
            </div>
        </div>
    </section> <!-- End Page title area -->   
    <app-shelf v-if="results" :data="results"></app-shelf>
</template>

<script>
    import AppShelf from '@/components/shelf'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'app-search',
        components: {
            AppShelf
        },          
        data() {
            return {
                filter: ''
            }
        },   
        computed: {
            s() {
                return this.$route.params.s
            },
            results: function() {
                return this.$store.state.products.filter(item => {
                    return item.title.toLowerCase().includes(this.$route.params.s);
                });
            }            
        }
    }
</script>
<style src="./style.scss" lang="scss"></style>