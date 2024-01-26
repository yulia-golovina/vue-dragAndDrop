<template>
    <div>
        <InputGroup class="task-form">
            <InputText id="task" class="task-form__input" :placeholder="placeholder" type="text" v-model.trim="newTask"/>
            <Button class="task-form__button" icon="pi pi-plus" @click="addNewTask"/>
        </InputGroup>
        <small
            v-if="!isVolid"
            id="task-help"
            class="task-form__message"
        >
            Your task is not volid.
        </small>
    </div>
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

const isVolid = ref(true);
const { addTask } = useTasksStore();
const newTask = ref();

const isVolidText = (text: string) => {
  const regexText = /^[a-zA-Z0-9]+$/;
  if(!text) return false;
  return regexText.test(text);
}

const addNewTask = () => {
    if(isVolidText(newTask.value)) {
        isVolid.value = true;
        addTask(newTask.value);
    } else {
        isVolid.value = false;
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
        border-radius: var(--default-border-radius) 0 0 var(--default-border-radius);
        &::placeholder {
            padding: 5px;
        }
        &:focus {
            box-shadow: none;
            
        }
    }
    &__message {
        color: var(--color-red);
    }
}
</style>