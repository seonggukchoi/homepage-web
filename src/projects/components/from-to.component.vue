<template>
<div class="from-to">
  <span>{{ from }}</span>
  <div v-if="from || to" class="mx-1 d-inline-block">~</div>
  <span>{{ to }}</span>
</div>
</template>

<script lang="ts" src="./from-to.component.ts">
</script>

<style lang="scss" scoped>
</style>
