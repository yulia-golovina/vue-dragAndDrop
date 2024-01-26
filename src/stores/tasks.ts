import { ref } from 'vue';
import { defineStore } from 'pinia';
import {listToDo, type TaskType} from '../mock/mockData';

export const useTasksStore = defineStore('tasks', () => {
  const toDoTasksList = ref<TaskType[]>(listToDo.filter((item) => !item.isDone));
  const doneTasksList = ref<TaskType[]>(listToDo.filter((item) => item.isDone));

  function addTask(taskText: string) {
    toDoTasksList.value.push({ 
      id: Date.now(),
      text: taskText,
      isDone: false, 
    });
  }

  function lockTask(taskId: number) {
    toDoTasksList.value.forEach((task) => {
      if(task.id === taskId) task.isLocked = !task.isLocked;
    });
  }

  function moveToDone() {
    const lockedTasks: TaskType[] = [];
    const toDone: TaskType[] = [];
    toDoTasksList.value.forEach((item) => {
      if(item.isLocked) {
        lockedTasks.push(item);
      } else {
        item.isDone = true;
        toDone.push(item);
      }
    });
    toDoTasksList.value = lockedTasks;
    doneTasksList.value.push(...toDone);
  }

  return { toDoTasksList, doneTasksList, addTask, lockTask, moveToDone };
})

// Second variant a store with one list of tasks

// import { computed, reactive, ref, watch, watchEffect } from 'vue';
// import { defineStore } from 'pinia';
// import {listToDo, type TaskType} from '../mock/mockData';

// export const useTasksStore = defineStore('tasks', () => {
//   const tasksList = ref<TaskType[]>(listToDo);
//   // const toDoTasksList = ref<TaskType[]>([]);
//   // const doneTasksList = ref<TaskType[]>([]);

//   const toDoTasksList = computed(() => tasksList.value.filter((item) => !item.isDone));
//   const doneTasksList = computed(() => tasksList.value.filter((item) => item.isDone));

//   function addTask(taskText: string) {
//     tasksList.value.push({ 
//       id: Date.now(),
//       text: taskText,
//       isDone: false, 
//     });
//   }

//   function lockTask(taskId: number) {
//     tasksList.value.forEach((task) => {
//       if(task.id === taskId) task.isLocked = !task.isLocked;
//     });
//   }

//   function moveToDone() {
//     tasksList.value.forEach((item) => {
//       if(!item.isLocked) item.isDone = true;
//     });
//   }

//   return { toDoTasksList, doneTasksList, addTask, lockTask, moveToDone };
// })