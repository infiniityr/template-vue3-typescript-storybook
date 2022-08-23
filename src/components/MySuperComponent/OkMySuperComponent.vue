<script setup lang="ts">
import './OkMySuperComponent.css'

interface Props {
    // value: text
}
interface Emit {
    // (e: 'click'): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()
</script>

<template>
  <div class="ok__my-super-component">
    This is a my-super-component
  </div>
</template>
