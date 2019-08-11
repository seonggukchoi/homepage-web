<template>
<div class="project">
  <v-card>
    <v-img
      lazy-src="../assets/logo.png"
      src="../assets/logo.png"
      position="center"
      gradient="to top, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, .1) 20%, rgba(0, 0, 0, 0) 100%"
      :transition="false"
      max-height="300px" />
    <v-card-title class="title">{{ project.title }}</v-card-title>
    <v-card-text class="caption">{{ project.description }}</v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn text right @click="openProjectDetail()">Details</v-btn>
    </v-card-actions>
  </v-card>

  <v-dialog
    max-width="600px"
    :value="isOpenedProjectDetail"
    @click:outside="closeProjectDetail()">
    <ProjectDetail :project="project" @close="closeProjectDetail()" />
  </v-dialog>
</div>
</template>

<script lang="ts" src="./project.component.ts">
</script>

<style lang="scss" scoped>
</style>
