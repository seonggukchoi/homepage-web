<template>
<div class="project">
  <v-card>
    <!-- TODO Add image -->
    <!-- <v-img
      lazy-src="@/assets/logo.png"
      src="@/assets/logo.png"
      position="center"
      gradient="to top, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, .1) 20%, rgba(0, 0, 0, 0) 100%"
      :transition="false"
      max-height="300px" /> -->
    <v-card-title class="d-block title text-no-wrap text-truncate">{{ project.name }}</v-card-title>

    <v-card-text class="caption text-no-wrap text-truncate">
      <span v-if="project.description && project.description.length > 0">{{ project.description }}</span>
      <span v-else class="grey--text text--lighten-1">There is no description.</span>
    </v-card-text>

    <v-card-actions>
      <StatusChip :status="project.status" />
      <v-spacer />
      <v-btn text right @click="openProjectDetail()">Details</v-btn>
    </v-card-actions>
  </v-card>

  <v-dialog
    max-width="600px"
    :value="isOpenedProjectDetail"
    @click:outside="closeProjectDetail()"
    @keydown.esc="closeProjectDetail()">
    <ProjectCard :project="project" @close="closeProjectDetail()" />
  </v-dialog>
</div>
</template>

<script lang="ts" src="./project-card.component.ts">
</script>

<style lang="scss" scoped>
</style>
