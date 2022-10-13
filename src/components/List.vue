<template>
  <div class="card">

  <div class="card-body">
    <h5 class="card-title">{{info.titulo}}</h5>
    <p class="card-text">{{info.texto}}</p>
    <a href="/editar" class="btn btn-primary">Editar</a>
  </div>

</div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style>

</style>