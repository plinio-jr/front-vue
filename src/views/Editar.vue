<template>
<div class="menu">
    <button @click="add">Novo item</button>
    <button @click="newcat">Nova categoria</button>
    <div class="lista">
        <br>
</div >

 <NewItem v-for="(dado, i) of dados" :key="i" :info="dado"/>

<br>
<br>
<br>
<div class="fim">
    <label>Mercado:<input type="text"></label> <label>Total: <input></label>
</div>
</div>

<br>
<button @click="save">Salvar</button>

  
</template>

<script>
import NewItem from '@/components/NewItem.vue'
import NewCat from '@/components/NewCat.vue'

export default {
components:{NewItem},

data() {
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
    NewItem,
    NewCat,
},
methods: {
     add() {
      this.dados.push(this.dados[0])
    },
    newcat(){
    this.dados.push(this.dados[0])
    }
},
}
</script>

<style>

</style>