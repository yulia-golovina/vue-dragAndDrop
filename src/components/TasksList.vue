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
        :id="item.id"
        :task="item"
      />
    </VueDraggable>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { type TaskType } from '../mock/mockData';
import { VueDraggable, type UseDraggableOptions } from 'vue-draggable-plus';
import TaskCard from './TaskCard.vue';

const props = defineProps<{
  list: Array<TaskType>,
  title: string,
  group: string,
}>();

const tasksList = ref(props.list);

watch(() => props.list, (newValue) => {
  tasksList.value = newValue;
});

const onUpdate = () => {
  console.log('update');
}
const onAdd: UseDraggableOptions<any>['onAdd'] = (event) => {
  const draggableTask = tasksList.value.find((item)=> item.id === Number(event.item.id));
  if(draggableTask) draggableTask.isDone = !draggableTask.isDone;
  console.log('add', draggableTask, props.list);
}
const remove = () => {
  console.log('remove');
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
