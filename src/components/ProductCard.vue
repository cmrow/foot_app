<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
      <div class="container" id="hamburguesa">
      <div class="row title text-center" id="hotdogs">
        <h1>Perros calientes</h1>
      </div>
      <div class="row hot_dogs text-center">
        <div class="col-12 col-sm-8 col-lg-3">
          <div class="card">
            <img class="img-fluid rounded-start" alt="..." />
            <div class="card-body">
              <div class="row">
                <h4></h4>
              </div>
              <div class="row">
                <h6></h6>
              </div>
            </div>
            <div class="row mb-3" id="price">
              <h4 ></h4>
            </div>
            <div class="row justify-content-center align-items-center">
              <div class="col-3">
                <button id="menos"  type="button"
                  ><i class="fa-solid fa-minus"></i></button>
              </div>
              <div class="col-6">
                <input id="medio" type="number" >
              </div>
              <div class="col-3">
                <button id="mas" type="button"><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            <button id=""  type="button"
              class="btn btn-info align-items-center" data-bs-toggle="modal"
              data-bs-target="#exampleModal22">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.container .hot_dogs .card{
    margin-bottom: 5%;
}
.container .hot_dogs .card .card-body{
    height:8rem;
  
}
.container .hot_dogs .card img{
    height:16rem;
   
}
.hot_dogs  #mas{
    background-color: green;
}
.hot_dogs  #menos{
    background-color: red;
}
.burger #medio{
    width: 100%;
}
.burger  #mas, #menos{
    width: 60%;
    border: none;
}
.burger  #mas{
    background-color: green;
}
.burger  #menos{
    background-color: red;
}
.burger #adicionales{
    border-color: var(--negro);
    color: var(--negro) !important;
}
.hot_dogs #medio{
    width: 100%;
}
.hot_dogs  #mas, #menos{
    width: 60%;
}
</style>
