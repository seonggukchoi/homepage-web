<template>
<v-app id="app">
  <TopBar />

  <v-container my-12 py-6>
    <router-view />
  </v-container>

  <v-btn class="mx-2" fab dark fixed bottom right @click="goToTop()">
    <v-icon>expand_less</v-icon>
  </v-btn>

  <Footer />
</v-app>
</template>

<script lang="ts" src="./app.component.ts">
</script>

<style lang="scss">
</style>
