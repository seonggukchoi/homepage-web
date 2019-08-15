<template>
<v-app id="app">
  <TopBar />

  <v-content>
    <v-container>
      <router-view />
    </v-container>
  </v-content>

  <Footer />

  <v-btn class="mx-2" fab dark fixed bottom right @click="goToTop()">
    <v-icon>expand_less</v-icon>
  </v-btn>
</v-app>
</template>

<script lang="ts" src="./app.component.ts">
</script>

<style lang="scss">
</style>
