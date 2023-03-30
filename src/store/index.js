import { createStore } from 'vuex' 

export const store = createStore({
  state () {
    return {
        products: null,
        cart: [],
        isLoading: false
    }
  },
  mutations: {
    pushProduct (state, payload) {
      state.cart.push(payload)
    },
    increaseQuantity (state, payload) {
      const cartItem = state.cart.find((item) => item.id == payload.id)
      cartItem.quantity = payload.quantity
    },    
    setData (state, payload) {
      state.products = payload
    },
    setLoading(state) {
      state.isLoading = !state.isLoading
    } 
  },
  actions: {
    async GetAllProducts (context) {  
        context.commit('setLoading')
        try {
            const response = await fetch(`${process.env.VUE_APP_BASE_API}/products`).then((res) => res.json())
            if(response) context.commit('setData', response)
        } catch (error) {
          console.log(error);
        } finally {
          context.commit('setLoading')
        }      
    },     
    async GetSingleProduct (context, payload) {  
      context.commit('setLoading')
      try {
          const response = await fetch(`${process.env.VUE_APP_BASE_API}/products/${payload}`).then((res) => res.json())
          return response
      } catch (error) {
        console.log(error);
      } finally {
        context.commit('setLoading')
      }      
    }, 
    addToCart (context, payload) {  
      context.commit('setLoading')
      let cart = context.state.cart;
      let item = cart.find(i => i.id == payload.id)

      if(!item) context.commit('pushProduct', payload)
      else {
        item.quantity = payload.quantity
        context.commit('increaseQuantity', item)
      }
      context.commit('setLoading')
    }, 
    removeFromCart (context, payload) {  
      context.commit('setLoading')
      let cart = context.state.cart;
      let item = cart.find(i => i.id == payload.id)

      if(item) context.state.cart = cart.filter(function(i) { return i.id !== item.id }), context.commit('setLoading')
    }
  },
  getters: {
    categories (state) {
      var _ = require('lodash');

      if(state.products) {
        return _.uniqBy(state.products.map((item) => {
          var slugify = require('slugify')

          return {
            title: item.category,
            uri: slugify(item.category)
          }
        }, []), 'title');
      }

      return [];
    }      
  }
})