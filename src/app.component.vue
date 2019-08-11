<template>
<v-app id="app">
  <TopBar />

  <v-container mt-12 pt-6>
    <router-view />
  </v-container>

  <v-btn class="mx-2" fab dark fixed bottom right @click="goToTop()">
    <v-icon>expand_less</v-icon>
  </v-btn>
</v-app>
</template>

<script lang="ts" src="./app.component.ts">
</script>

<style lang="scss">
</style>
