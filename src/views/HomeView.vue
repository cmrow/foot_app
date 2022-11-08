<script setup>
import { useProductStore } from "./../stores/products";
import { storeToRefs } from "pinia";
import NavBar from "./../components/NavBar.vue"
import ProductCard from '../components/ProductCard.vue'
import Carrusel from '../components/Carrusel.vue'
import Footer from '../components/Footer.vue'


const productStore = useProductStore();
const { additional, burgers, hot_dogs } = storeToRefs(productStore);
let additional1 = additional;
let burgers1 = burgers;
let hot_dogs1 = hot_dogs;

</script>

<template>
  <NavBar></NavBar>
  <!-- <Carrusel/> -->
  <ProductCard/>
  <Footer/>
  
</template>

<style scoped>
</style>
