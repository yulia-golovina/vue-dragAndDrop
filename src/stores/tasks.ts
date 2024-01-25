import { computed, reactive, ref, watch, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import {listToDo, type TaskType} from '../mock/mockData';

export const useTasksStore = defineStore('tasks', () => {
  const tasksList = ref<TaskType[]>(listToDo);

  const toDoTasksList = computed(() => tasksList.value.filter((item) => !item.isDone));
  const doneTasksList = computed(() => tasksList.value.filter((item) => item.isDone));

  function addTask(taskText: string) {
    tasksList.value.push({ 
      id: Date.now(),
      text: taskText,
      isDone: false, 
    });
    console.log(tasksList, toDoTasksList);
  }

  function lockTask(taskId: number) {
    const currentTask = tasksList.value.find((task) => task.id === taskId);
    currentTask!.isLocked = !currentTask!.isLocked;
  }

  function moveToDone() {
    tasksList.value.forEach((item) => {
      if(!item.isLocked) item.isDone = true;
    });
  }

  return { toDoTasksList, doneTasksList, addTask, lockTask, moveToDone };
})

// import { defineStore } from 'pinia';
// import {listToDo, type TaskType} from '../mock/mockData';

// export const useTasksStore = defineStore('tasks', { 
//   state: () => ({
//     tasksList: listToDo,
//   }),

//   getters: {
//     toDoTasksList: (state) => state.tasksList.filter((item)=>!item.isDone),
//     doneTasksList: (state) => state.tasksList.filter((item)=>item.isDone),
//   },

//   actions: {
//     addTask(taskText: string) {
//       this.tasksList.push({
//         id: Date.now(),
//         text: taskText,
//         isDone: false,
//       });
//     },

//     lockTask(taskId: number) {
//       const currentTask = this.toDoTasksList.find((task) => task.id === taskId) as TaskType;
//       currentTask!.isLocked = !currentTask!.isLocked;
//     },

//     moveToDone() {
//       this.toDoTasksList.forEach((item: TaskType) => {
//         if(!item.isLocked) item.isDone = true;
//       });
//     }
//   },
// });