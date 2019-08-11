<template>
<div id="projects">
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex v-for="project in projects" :key="project.id" xs3>
        <Project :project="project" />
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script lang="ts" src="./projects.component.ts">
</script>

<style lang="scss" scoped>
</style>
