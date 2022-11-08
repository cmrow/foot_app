<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="container-fluid g-0 fixed-top">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">
          <img
            src="https://i.ibb.co/xYCNXYP/Group-1.png"
            width="130"
            height="60"
            class="d-inline-block align-top"
            alt=""
          />
        </a>
        <form class="d-flex te">
          <button class="btn btn-outline-light" type="button">
            <a href="#carouselExampleInterval" id="home-nav" class="nav-link"
              >Home</a
            >
          </button>
          <button class="btn btn-outline-light" type="button">
            <a href="#hamburguesa" id="hamburguesa-nav" class="nav-link"
              >Hamburguesas</a
            >
          </button>
          <button class="btn btn-outline-light" type="button">
            <a href="#hotdogs" id="hotdogs-nav" class="nav-link"
              >Perros Calientes</a
            >
          </button>
          <button
            class="btn btn-outline-light"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Iniciar sesión
          </button>
          <button
            id="car"
            class="btn btn-outline-light"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <span
              class="
                position-absolute
                top-50
                right-4
                translate-middle
                badge
                rounded-pill
              "
            ></span>
            <img
              src="https://i.ibb.co/9g9Bym6/logo-Secundary.png"
              alt="Carrito"
            />
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #3e2420 !important;
  font-family: "Roboto", sans-serif;
}
.navbar button {
  padding-top: 1%;
  font-family: "Bungee Spice", cursive;
  border-color: #3e2420;
}
.navbar form img {
  width: 30px;
}
.navbar form span {
  margin-left: -4px;
}
</style>