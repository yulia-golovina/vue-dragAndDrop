export const listToDo = [
    {
      id: 1,
      text: 'пресс качат',
      isDone: false,
    },
    {
      id: 2,
      text: 'бегит',
      isDone: false,
    },
    {
      id: 3,
      text: 'анжуманя',
      isDone: false,
    },
    {
      id: 4,
      text: 'турник',
      isDone: false,
    }
  ];

  export const listDone: TaskType[] = [
    {
      id: 11,
      text: 'смотреть видосики',
      isDone: true,
    },
    {
      id: 12,
      text: 'писать подспичичникам',
      isDone: true,
    }
  ];

  export type TaskType = { 
    id: number,
    text: string,
    isDone: boolean,
    isLocked?: boolean,
  };