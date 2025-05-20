<template>
  <div class="tracker-board column items-start q-pa-lg">
    <div class="text-h4">Focus Time</div>
    <div class="text-h2 q-my-md">{{ minutes }}:{{ seconds }}</div>
    <div class="row q-gutter-sm">
      <q-btn color="primary" label="Start" @click="start" />
      <q-btn color="secondary" label="Pause" @click="pause" />
      <q-btn color="negative" label="Reset" @click="reset" />
    </div>
  </div>
</template>

<script setup>
import { useTimerStore } from 'src/stores/timer'
import { storeToRefs } from 'pinia'

const store = useTimerStore()
const { minutes, seconds } = storeToRefs(store)
const start = () => store.startTimer()
const pause = () => store.pauseTimer()
const reset = () => store.resetTimer()
</script>

<style scoped>
.tracker-board {
  min-width: 320px;
  border-radius: 8px;
  background: #fffbea;
  border: 10px solid #756245;
  font-family: 'Quicksand', sans-serif;
}
</style>
