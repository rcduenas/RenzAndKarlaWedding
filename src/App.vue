<template>
  <v-app>
    <NavBar />
    <v-main class="pa-0 ma-0">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>
