<template>
<div id="contacts">
  <v-container grid-list-lg fluid>
    <v-layout wrap row>
      <v-flex xs12>
        <v-text-field label="Email" type="email" clearable />
      </v-flex>
    </v-layout>

    <v-layout wrap row>
      <v-flex xs12>
        <v-textarea auto-grow label="What you talking about with me?" />
      </v-flex>
    </v-layout>

    <v-layout wrap row>
      <v-flex xs12>
        <v-btn width="100%" dark large @click="sendEmail()">Submit</v-btn>
      </v-flex>
    </v-layout>
  </v-container>

  <v-dialog
    v-model="isOpenedSubmitDialog"
    max-width="400px"
    @click:outside="closeSubmitDialog()"
    @keydown.esc="closeSubmitDialog()">
    <SubmitDialog @close="closeSubmitDialog()" />
  </v-dialog>
</div>
</template>

<script lang="ts" src="./contacts.component.ts">
</script>

<style lang="scss" scoped>
</style>
