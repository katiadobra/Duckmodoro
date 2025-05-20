<template>
  <q-btn
    flat
    round
    :icon="isPlaying ? 'volume_up' : 'volume_off'"
    @click="toggleSound"
    aria-label="Toggle sound"
  />
</template>

<script setup>
import { ref } from 'vue'

// 1. Створюємо аудіо
const audio = new Audio(new URL('../assets/sounds/garden-sunny-day.mp3', import.meta.url).href)

// 2. Створюємо стан
const isPlaying = ref(false)

// 3. Обробник натискання
function toggleSound() {
  if (isPlaying.value) {
    audio.pause()
    audio.currentTime = 0
  } else {
    audio.play()
  }
  isPlaying.value = !isPlaying.value
}
</script>
