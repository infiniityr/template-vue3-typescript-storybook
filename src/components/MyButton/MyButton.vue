<script setup lang="ts">
import './MyButton.css'

interface Props {
    text: string
    color?: 'primary' | 'secondary'
}
interface Emit {
    (e: 'click'): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()
</script>

<template>
    <button
        :class="['lib__my-button', color ?? '']"
        type="button"
        @click="emit('click')"
    >
        {{ props.text }}
    </button>
</template>
