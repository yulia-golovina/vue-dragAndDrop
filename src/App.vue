<template>
  <HomePage />
</template>

<script setup lang="ts">
import HomePage from './components/HomePage.vue';
</script>

<style lang="scss">
.p-button {
  &:focus, :focus-visible {
    outline: none;
    border: none;
    box-shadow: none;
  }
}
</style>