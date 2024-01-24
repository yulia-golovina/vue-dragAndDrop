<template>
  <HomePage />
</template>

<script setup lang="ts">
import HomePage from './components/HomePage.vue';
</script>

<style lang="scss">
.p-button {
  &:active, &:hover {
    background: none;
  }
  &:focus, :focus-visible {
    outline: none;
    background: none;
    border: none;
    box-shadow: none;
  }
}
</style>