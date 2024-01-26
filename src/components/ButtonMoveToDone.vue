<template>
    <Button
        class="button-move-to-done"
        icon="pi pi-arrow-right"
        @click="moveToDone"
    />
</template>
  
<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks';
import Button from 'primevue/button';

const { moveToDone } = useTasksStore();
</script>
  
<style lang="scss" scoped>
.button-move-to-done {
    padding: 20px;
    height: 50px;
    align-self: center;
    background-color: var(--color-grey);
    &:hover {
        background-color: var(--color-grey-dark);
    }
}
</style>