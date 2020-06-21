<template>
<v-app id="app">
  <TopBarComponent />

  <v-main>
    <v-container>
      <router-view />
    </v-container>
  </v-main>

  <FooterComponent />

  <v-btn class="mx-2" fab dark fixed bottom right @click="goToTop()">
    <v-icon>expand_less</v-icon>
  </v-btn>
</v-app>
</template>

<script lang="ts" src="./app.component.ts">
</script>

<style lang="scss">
</style>
