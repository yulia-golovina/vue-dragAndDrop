<template>
  <VueDraggable
      class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
      v-model="listToDo"
      :animation=150
      ghostClass="ghost"
      group="people"
      @update="onUpdate"
      @add="onAdd"
      @remove="remove"
    >
      <TaskCard
        v-for="item in listToDo"
        :key="item.id"
        class="cursor-move h-30 bg-gray-500/5 rounded p-3"
        :text="item.text"
      >
      </TaskCard>
    </VueDraggable>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import TaskCard from './TaskCard.vue';

const props = defineProps<{
  list: Array<{id: number, text: string}>;
}>();

const listToDo = ref(props.list);

function onUpdate() {
  console.log('update')
}
function onAdd() {
  console.log('add')
}
function remove() {
  console.log('remove')
}
</script>
