<template>
<div id="project-list">
  <v-container grid-list-lg fluid>
    <v-layout wrap>
      <v-flex v-for="project in projects" :key="project.id" xs12 sm6 md4 lg3>
        <ProjectCard :project="project" />
      </v-flex>
    </v-layout>
  </v-container>

  <v-dialog
    max-width="600px"
    :value="isOpenedProjectModal"
    @click:outside="closeProjectModal()"
    @keydown.esc="closeProjectModal()">
    <ProjectModal />
  </v-dialog>

  <v-overlay absolute :value="isLoading">
    <v-progress-circular indeterminate size="32"></v-progress-circular>
  </v-overlay>
</div>
</template>

<script lang="ts" src="./project-list.component.ts">
</script>

<style lang="scss" scoped>
</style>
