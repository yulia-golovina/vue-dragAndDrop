<template>
    <InputGroup class="task-form">
        <InputText class="task-form__input" :placeholder="placeholder" type="text" v-model.trim="newTask"/>
        <Button class="task-form__button" icon="pi pi-plus" @click="addNewTask"/>
    </InputGroup>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import { ref } from 'vue';

defineProps<{
    placeholder?: string,
}>();

const { addTask } = useTasksStore();
const newTask = ref();

function isVolidText(text: string) {
  const regexText = /^[a-zA-Z0-9]+$/;
  return regexText.test(text);
}

function addNewTask() {
    if(isVolidText(newTask.value)) {
        addTask(newTask.value);
    } else {
        console.log('Task is not valid');
    }
}
</script>

<style lang="scss" scoped>
.task-form {
    display: flex;
    width: 500px;
    border: var(--default-border);
    border-radius: var(--default-border-radius);

    &__button {
        background-color: var(--color-grey);
        display: flex;
        align-items: center;
        border-left: var(--default-border);
        border-radius: var(--default-border-radius);
        &-icon {
            width: 20px;
            height: 20px;
        }
        &:focus {
            box-shadow: none; 
        }
        &:hover {
            background-color: var(--color-grey-dark);
        }
    }
    
    &__input {
        padding: var(--padding-10);
        width: 100%;
        border-radius: var(--default-border-radius);
        &::placeholder {
            padding: 5px;
        }
        &:focus {
            box-shadow: none;
            
        }
    }
}
</style>