<template>
    <Card :class="['task-card', {'--lockedTask': isLocked}]">
        <template #content>
            <div class="task-card__content">
                <span>{{ text }}</span>
                <Button 
                    v-if="!isDone"
                    :class="['task-card__content-button', {'--locked': isLocked}]"
                    icon="pi pi-lock"
                    text
                    @click="onLock"
                 />
            </div>
        </template>        
    </Card>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks';
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';



const props = defineProps<{
    text: string,
    taskId: number,
    isDone?: boolean,
}>();

const isLocked = ref(false);
const { lockTask } = useTasksStore();

const onLock = () => {
    isLocked.value = !isLocked.value;
    lockTask(props.taskId);
}
</script>

<style lang="scss" scoped>
.task-card {
    padding: var(--padding-10);
    &:hover, :focus {
        background: var(--color-grey);
    }

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>

<style lang="scss">
.task-card {
    & .p-button {
        & .pi {
            font-size: 24px;
            color: var(--color-grey);
        }
        &.--locked,  &.--locked:hover {
            & .pi {
            color:  var(--color-black);
        }
            }
       &:active, :hover {
            background: none;
       }
       &:focus, :focus-visible {
            outline: none;
            background: none;
            border: none;
            box-shadow: none;
       }
    }
    &:hover .p-button {
        & .pi {
            color: var(--color-white);
        }
        &:hover {
            background: none;
            & .pi, &.--locked .pi {
                color: var(--color-grey-dark-2);
            }
        }
        &.--locked .pi {
            color:  var(--color-black);
        }
    }
}
</style>