<template>
<div v-if="project" class="project-modal">
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
      <div v-if="project.organizations && project.organizations.length > 0">
        <div v-for="organization of project.organizations" :key="`${ project.id }-organization-${ organization.id }`">
          <a v-if="organization.url" class="ml-2 subtitle-1 grey--text" :href="organization.url" target="_blank">@{{ organization.name }}</a>
          <span v-else class="ml-2 subtitle-1 grey--text">@{{ organization.name }}</span>
        </div>
      </div>
    </v-card-title>

    <v-card-text>
      <v-container grid-list-xs grid-list-sm grid-list-md grid-list-lg fluid pa-0>
        <v-layout row wrap class="mt-n4 mb-2">
          <v-flex>
            <FromTo :from="project.from" :to="project.to" />
          </v-flex>
        </v-layout>

        <v-layout row wrap mb-6>
          <v-flex>{{ project.description }}</v-flex>
        </v-layout>

        <v-layout row wrap v-if="project.stacks && project.stacks.length > 0">
          <v-flex xs12 sm2 class="text-uppercase black--text font-weight-bold">Stacks</v-flex>
          <v-flex xs12 sm10>
            <v-chip v-for="stack of project.stacks" :key="`${ project.id }-stack-${ stack.id }`" class="ml-n1 mr-2 mb-1">
              {{ stack.name }}
            </v-chip>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 sm2 class="text-uppercase black--text font-weight-bold">
            <span>Roles</span>
          </v-flex>
          <v-flex xs12 sm10>
            <div v-for="role of project.roles" :key="`${ project.id }-role-${ role.name }`" class="mb-4">
              <span>{{ role.name }}</span>
              <span class="mx-2">|</span>
              <span>{{ role.contributionPercentage }}% Contribution</span>
              <div class="my-2"></div>
              <FromToComponent :from="role.from" :to="role.to" />
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <StatusChipComponent :status="project.status" />
      <v-spacer />
      <v-btn text @click="closeProjectModal()">Close</v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script lang="ts" src="./project-modal.component.ts">
</script>

<style lang="scss" scoped>
</style>
