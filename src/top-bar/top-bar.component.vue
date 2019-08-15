<template>
<div id="top-bar">
  <v-app-bar app color="rgba(255, 255, 255, .95)">
    <v-toolbar-title>
      <span class="title">Seongg.</span>
      <span>uk</span>
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-btn text to="/projects">Projects</v-btn>
      <!-- <v-btn text to="/contacts">Contacts</v-btn> -->
    </v-toolbar-items>
  </v-app-bar>
</div>
</template>

<script lang="ts" src="./top-bar.component.ts">
</script>

<style lang="scss" scoped>
</style>
