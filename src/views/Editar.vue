<template>
<div class="menu">
    <button @on-click="novoitem">Novo item</button>
    <button @click="novacatg">Nova categoria</button>
    <div class="lista">
        <br>
</div >

     <NewItem />
     <br>
     <NewItem />
     <br>
     <NewItem />
     <br>
     <NewItem />
     <br>
     <NewItem />
     <br>
     <NewItem />

<br>
<br>
<br>
<div class="fim">
    <label>Mercado:<input type="text"></label> <label>Total: <input></label>
</div>
</div>


  
</template>

<script>
import NewItem from '@/components/NewItem.vue'

export default {
components:{NewItem},

data() {
    return{
        components: [NewItem],
        novoitem:{
            nome:"",
            quantidade:"",
            peso:"",
            preco:"",
        }
    }
}
}



</script>

<style>

</style>