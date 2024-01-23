<template>
    <InputGroup class="task-form">
        <InputText class="task-form__input" :placeholder="placeholder" />
        <Button class="task-form__button" icon="pi pi-plus"/>
    </InputGroup>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';

defineProps<{
    placeholder?: string,
}>();
</script>

<style lang="scss" scoped>
.task-form {
    display: flex;
    width: 500px;
    border: var(--default-border);
    border-radius: var(--default-border-radius);

    &__button {
        border: none;
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
            background-color: var(--color-grey-dark)
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