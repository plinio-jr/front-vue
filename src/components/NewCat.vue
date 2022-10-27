<template>
  <div class="item">
    <label for="nome">Nome:<input type="text"></label>
      
      <button @click="add">Adicionar produto</button>

      <NewCat v-for="(categoria, i) of categorias" :key="i" :info="categoria"/>
  </div>
</template>

<script>
export default {
name:"NewCat",
data(){
    return {
        nome:null
    }
},
methods: {
    add() {
      this.categorias.push(this.categorias[0])
    },
}
}
</script>

<style>

</style>