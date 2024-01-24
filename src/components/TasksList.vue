<template>
  <div class="task-list">
    <span class="task-list__title">{{ title }}</span>
    <VueDraggable
      class="task-list__list"
      v-model="tasksList"
      :group="group"
      chosenClass='--chosen'
      filter=".--lockedTask"
      :animation=150
      @update="onUpdate"
      @add="onAdd"
      @remove="remove"
    >
      <TaskCard
        v-for="item in tasksList"
        :key="item.id"
        :taskId="item.id"
        :text="item.text"
        :isDone="item.isDone"
      />
    </VueDraggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import TaskCard from './TaskCard.vue';

type TaskType = { 
  id: number,
  text: string,
  isDone?: boolean,
};

const props = defineProps<{
  list: Array<TaskType>,
  title: string,
  group: string,
}>();

const tasksList = ref(props.list);

function onUpdate() {
  console.log('update')
}
function onAdd() {
  console.log(props.list);
  console.log('add')
}
function remove() {
  console.log(props.list);
  console.log('remove')
}
</script>

<style lang="scss" scoped>
    .task-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: var(--padding-10);
      border: var(--default-border);
      border-radius: var(--default-border-radius);
      &__title {
        display: block;
        font-size: larger;
        font-weight: bold;
      }
      &__list {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        & .--chosen {
        opacity: 0.5;
        background: #c8ebfb;
      }
      }
    }

</style>
