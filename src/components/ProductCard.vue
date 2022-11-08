<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
     <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div>
          <button class="btn btn-primary">+</button>
          <input type="text">
          <button class="btn btn-primary">-</button>
        </div>
      </div>
      <a href="#" class="btn btn-primary">Agregar</a>
  </div>
</div>
</template>

<style scoped>

</style>
