import { ref } from 'vue';
import { defineStore } from 'pinia';
import {listToDo, listDone} from '../mock/mockData';

export type TaskType = { 
  id: number,
  text: string,
  isDone?: boolean,
  isLoked?: boolean,
};

export const useTasksStore = defineStore('tasks', () => {
  const toDoTasksList = ref<TaskType[]>(listToDo);
  const doneTasksList = ref<TaskType[]>(listDone);

  function addTask(taskText: string) {
    toDoTasksList.value.push({
      id: Date.now(),
      text: taskText,
    });
  }

  function lockTask(taskId: number) {
    const currentTask = toDoTasksList.value.find((task) => task.id === taskId);
    currentTask!.isLoked = !currentTask!.isLoked;
  }

  function moveToDone() {
    const lokedTasks: TaskType[] = [];
    const toDone: TaskType[] = [];
    toDoTasksList.value.forEach((item) => {
      if(item.isLoked) {
          lokedTasks.push(item);
      } else {
        item.isDone = true;
        toDone.push(item);
      }
    });
    toDoTasksList.value.length = 0;
    toDoTasksList.value.push(...lokedTasks);
    doneTasksList.value.push(...toDone);
  }

  return { toDoTasksList, doneTasksList, addTask, lockTask, moveToDone };
})
