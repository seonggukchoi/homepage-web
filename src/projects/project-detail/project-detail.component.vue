<template>
<div class="project-detail">
  <v-card>
    <v-carousel v-if="project.images && project.images.length > 0" height="350px" cycle interval="4s" hide-delimiters>
      <v-carousel-item v-for="(image, index) of project.images" :key="`${ project.id }-image-${ index }`">
        <v-img
          :lazy-src="image"
          :src="image"
          position="center"
          gradient="to top, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, .1) 20%, rgba(0, 0, 0, 0) 100%"
          :transition="false"
          height="100%" />
      </v-carousel-item>
    </v-carousel>

    <v-card-title>
      <span class="title">{{ project.name }}</span>
      <v-spacer />
      <span v-if="project.organization" class="subtitle-1 grey--text">@{{ project.organization }}</span>
    </v-card-title>

    <v-card-text>
      <v-container pa-0>
        <v-row no-gutters class="mt-n2 mb-2">
          <v-col>
            <FromTo :from="project.from" :to="project.to" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>{{ project.description }}</v-col>
        </v-row>

        <v-row v-if="project.stacks && project.stacks.length > 0">
          <v-col cols="2" class="pt-4 text-uppercase black--text font-weight-bold">Stacks</v-col>
          <v-col>
            <v-chip v-for="stack of project.stacks" :key="`${ project.id }-stack-${ stack }`" class="ml-n1 mr-2 mb-1">
              {{ stack }}
            </v-chip>
          </v-col>
        </v-row>

        <v-row dense v-for="(role, index) of project.roles" :key="`${ project.id }-role-${ role.name }`">
          <v-col cols="2" class="text-uppercase black--text font-weight-bold">
            <span v-if="index === 0">Roles</span>
          </v-col>
          <v-col>
            <span>{{ role.name }}</span>
            <span class="mx-2">|</span>
            <span>{{ role.contribution_percentage }}% Contribution</span>
            <FromTo :from="role.from" :to="role.to" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <StatusChip :status="project.status" />
      <v-spacer />
      <v-btn text right @click="closeProjectDetail()">Close</v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script lang="ts" src="./project-detail.component.ts">
</script>

<style lang="scss" scoped>
</style>
