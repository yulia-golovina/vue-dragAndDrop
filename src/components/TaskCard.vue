<template>
    <Card :class="['task-card', {'--lockedTask': task.isLocked}]">
        <template #content>
            <div class="task-card__content">
                <span>{{ task.text }}</span>
                <Button 
                    v-if="!task.isDone"
                    :class="['task-card__content-button', {'--locked': task.isLocked}]"
                    :icon="task.isLocked ? 'pi pi-lock': 'pi pi-lock-open'"
                    text
                    @click.stop="onLock"
                 />
            </div>
        </template>        
    </Card>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks';
import { type TaskType } from '../mock/mockData';
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';

const props = defineProps<{
    task: TaskType,
}>();

const { lockTask } = useTasksStore();

const onLock = () => {
    lockTask(props.task.id);
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