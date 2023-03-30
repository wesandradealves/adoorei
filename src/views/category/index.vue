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
    <app-shelf v-if="shelf" :data="shelf"></app-shelf>
</template>

<script>
    import AppShelf from '@/components/shelf'

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'app-category',
        components: {
            AppShelf
        },           
        data() {
            return {
                filter: '',
                title: '',
                shelf: null
            }
        },
        beforeRouteUpdate(to) {
            let id = to.params.id;
            let category = this.$store.getters.categories.find((item) => item.uri == id);
            this.title = category.title;
            document.title = `${process.env.VUE_APP_TITLE} - ${this.title}`;

            if (this.$store.state.products && this.$store.state.products.filter((item) => item.category == category.title)) {
                this.shelf = this.$store.state.products.filter((item) => item.category == category.title)
            }       
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                setTimeout(function() { 
                    let category = vm.$store.getters.categories.find((item) => item.uri == to.path.split('/category/')[1]);

                    if (vm.$store.state.products && vm.$store.state.products.filter((item) => item.category == category.title)) {
                        vm.shelf = vm.$store.state.products.filter((item) => item.category == category.title)
                    }                    
                }, 1000);                
            })
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