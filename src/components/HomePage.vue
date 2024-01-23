<template>
    <div class="main-wrapper">
        <AddTaskForm placeholder="Введите задачу"/>
        <div class="tasks-wrapper">
            <TasksList :list="listToDo"/>
            <TasksList :list="listDone"/>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import AddTaskForm from './AddTaskForm.vue';
import TasksList from './TasksList.vue';
import {listToDo, listDone} from '../mock/mockData';
</script>
  
<style scoped>
.main-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 40px;
}
.tasks-wrapper {
    display: flex;
    gap: 40px;
}
</style>