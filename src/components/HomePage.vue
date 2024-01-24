<template>
    <div class="main-wrapper">
        <AddTaskForm placeholder="Введите задачу"/>
        <div class="tasks-wrapper">
            <TasksList :list="toDoTasksList" title="To do" group="tasks"/>
            <ButtonMoveToDone />
            <TasksList :list="doneTasksList" title="Done" group="tasks"/>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks';
import AddTaskForm from './AddTaskForm.vue';
import TasksList from './TasksList.vue';
import ButtonMoveToDone from './ButtonMoveToDone.vue';

const { toDoTasksList, doneTasksList } = useTasksStore();

</script>
  
<style lang="scss" scoped>
.main-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 40px;
}
.tasks-wrapper {
    display: flex;
    gap: 40px;
    width: 100%;
}
</style>