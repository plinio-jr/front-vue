<template>
  <div class="home">
    <section class="heri is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
          Bem vindo
        </p>
        <p class="subtitle">
          Precisa de ajuda para lembrar o que comprar?
        </p>
      </div>

    </section>

    <div class="columns is multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Listas:</h2>
        
        <List />

      <br>
      <button> Nova Lista</button>
      </div>

    
          
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import List from '@/components/List.vue'

import ProductBox from '@/components/ProductBox'

export default {
  name: 'HomeView',
  data(){
    return{
      latestProducts:[]
    }
  },
  components: {
    ProductBox,
    List
  },
  mounted() {
    this.getLatestProducts()

    document.title = 'Home | Lista'
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit('setIsLoading', true)
      
      await axios
        .get('/api/v1/latest-products/')
        .then(response => {
          this.latestProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })

        this.$store.commit('setIsLoading', false)
    }
  }
}
</script>
