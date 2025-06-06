<template>
  <q-btn
    flat
    round
    class="action-btn"
    :icon="isPlaying ? 'volume_up' : 'volume_off'"
    @click="toggleSound"
    aria-label="Toggle sound"
  />
</template>

<script setup>
import { ref } from 'vue'

// 1. Створюємо аудіо
const audio = new Audio(new URL('/assets/sounds/garden-sunny-day.mp3', import.meta.url).href)

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
<style>
.action-btn {
  position: absolute;
  top: 20px;
  right: 90px;
  border: 4px solid;
  border-radius: 10px;
  font-size: 1rem;
  z-index: 2;
}

@media (min-width: 600px) {
  .action-btn {
    right: 100px;
    font-size: 1.3rem;
  }
}
</style>
