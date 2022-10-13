<template>
  <div class="item">
    <label for="nome">Nome:<input type="text"></label>
      <label for="qtd">Quantidade:<input type="text"></label>
      <label for="peso">Peso:<input type="text"></label>
      <label for="preco">Preço:<input type="text"></label>
      <label><input type="checkbox"></label>
  </div>
</template>

<script>
export default {
name:"NewItem",
data(){
  return{
    nome: null,
    qtd: null,
    peso: null,
    preco:null,
  }
}
}
</script>

<style>

</style>