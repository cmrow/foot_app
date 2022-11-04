<script setup>
import { useProductStore } from "./../stores/product";
import { storeToRefs } from "pinia";
const productStore = useProductStore();
const { additional, burgers, hot_dogs } = storeToRefs(productStore);
let additional1=additional;
let burgers1=burgers;
let hot_dogs1=hot_dogs;
</script>

<template></template>

<style scoped>
</style>
