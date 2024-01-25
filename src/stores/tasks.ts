import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import {listToDo, listDone, type TaskType} from '../mock/mockData';

export const useTasksStore = defineStore('tasks', () => {
  let toDoTasksList = reactive<TaskType[]>(listToDo);
  const doneTasksList = ref<TaskType[]>(listDone);

  function addTask(taskText: string) {
    toDoTasksList.push({
      id: Date.now(),
      text: taskText,
      isDone: false,
    });
  }

  function lockTask(taskId: number) {
    const currentTask = toDoTasksList.find((task) => task.id === taskId);
    currentTask!.isLocked = !currentTask!.isLocked;
  }

  function moveToDone() {
    const lockedTasks: TaskType[] = [];
    const toDone: TaskType[] = [];
    toDoTasksList.forEach((item) => {
      if(item.isLocked) {
          lockedTasks.push(item);
      } else {
        item.isDone = true;
        toDone.push(item);
      }
    });
    // toDoTasksList = reactive<TaskType[]>(lockedTasks);
    toDoTasksList.length = 0;
    toDoTasksList.push(...lockedTasks);
    doneTasksList.value.push(...toDone);
  }

  return { toDoTasksList, doneTasksList, addTask, lockTask, moveToDone };
})

// import { defineStore } from 'pinia';
// import {listToDo, listDone, type TaskType} from '../mock/mockData';

// export const useTasksStore = defineStore('tasks', { 
//   state: () => ({
//     toDoTasksList: listToDo,
//     doneTasksList: listDone,
//     draggbledTask: {},
//   }),

//   actions: {
//     saveDraggbledTask(task:TaskType) {
//       this.draggbledTask = task;
//       console.log(this.draggbledTask);
//     },

//     addTask(taskText: string) {
//       this.toDoTasksList.push({
//         id: Date.now(),
//         text: taskText,
//         isDone: false,
//       });
//     },

//     lockTask(taskId: number) {
//       const currentTask = this.toDoTasksList.find((task) => task.id === taskId) as TaskType;
//       currentTask!.islocked = !currentTask!.islocked;
//     },

//     moveToDone() {
//       const lockedTasks: TaskType[] = [];
//       const toDone: TaskType[] = [];
//       this.toDoTasksList.forEach((item: TaskType) => {
//         if(item.islocked) {
//             lockedTasks.push(item);
//         } else {
//           item.isDone = true;
//           toDone.push(item);
//         }
//       });
//       this.toDoTasksList.length = 0;
//       this.toDoTasksList.push(...lockedTasks);
//       // this.$patch({toDoTasksList: []})
//       this.doneTasksList.push(...toDone);
//     }
//   },
// });