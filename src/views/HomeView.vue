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
        
        <List v-for="(dado, i) of dados" :key="i" :info="dado"/>

      <br>
      <button @click="add"> Nova Lista</button>
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
      criar:[],
      dados: [
        {
          titulo: 'Titulo 1',
          texto: 'lista feita no dia 23/06/22, por usuario X, onde foi usada no Supermecado Y.'
        },
        {
          titulo: 'Titulo 2',
          texto: 'lista feita no dia 23/06/22, por usuario X, onde foi usada no Supermecado W.'
        }
      ]
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
    add() {
      this.dados.push(this.dados[0])
    },
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
