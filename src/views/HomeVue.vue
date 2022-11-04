<script setup>
import { useProductStore } from "./../stores/products";
import { storeToRefs } from "pinia";
const productStore = useProductStore();
const { additional, burgers, hot_dogs } = storeToRefs(productStore);
let additional1 = additional;
let burgers1 = burgers;
let hot_dogs1 = hot_dogs;
</script>

<template>
  <h1>Home</h1>
  <div>Corrusel</div>
</template>

<style scoped>
</style>
