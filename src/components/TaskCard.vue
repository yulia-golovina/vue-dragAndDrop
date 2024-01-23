<template>
    <Card class="task-card">
        <template #content>
            <div class="task-card__content">
                <span>{{ text }}</span>
                <Button 
                    :class="['task-card__content-button', {'--locked': isLocked}]"
                    icon="pi pi-lock"
                    :iconClass="iconClass"
                    text 
                    rounded
                    @click="onLock"
                 />
            </div>
        </template>        
    </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';
import { computed, ref } from 'vue';

defineProps<{
    text: string,
}>();

const isLocked = ref(false);

const iconClass = computed( () => {
    return isLocked.value ? "button__icon" : '';
});

const onLock = () => {
    isLocked.value = !isLocked.value;
}
</script>

<style lang="scss" scoped>
.task-card {
    padding: 0 var(--padding-10);
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
}

.task-card:hover {
    & .p-button {
         & .pi {
            color: var(--color-white);
        }
        &.--locked .pi{
            color:  var(--color-black);
        }
        &:hover {
            background: var(--color-white-dark);
        }
    }
}
</style>