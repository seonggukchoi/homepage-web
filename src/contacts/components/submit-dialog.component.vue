<template>
<div class="submit-dialog">
  <v-card>
    <v-card-title>Success!</v-card-title>
    <v-card-text>I'll reply you by email after confirmation.</v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn text @click="closeSubmitDialog()">OK</v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script lang="ts" src="./submit-dialog.component.ts">
</script>

<style lang="scss" scoped>
</style>
