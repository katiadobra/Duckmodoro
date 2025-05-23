<template>
  <div class="tracker-board column items-start q-pa-md">
    <div class="text-h4">Focus Time</div>
    <div class="text-h2 q-my-md">{{ minutes }}:{{ seconds }}</div>
    <div class="row q-gutter-sm">
      <q-btn color="primary" label="Start" @click="start" />
    </div>
    <div class="row q-gutter-sm">
      <q-btn color="secondary" label="Pause" @click="pause" />
    </div>
    <div class="row q-gutter-sm">
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

<style scoped lang="scss">
.tracker-board {
  position: absolute;
  bottom: 10%;
  left: 10%;
  min-width: 250px;
  border-radius: 8px;
  background: #fffbea;
  border: 10px solid $brown-7;
  font-family: 'Quicksand', sans-serif;

  .body--dark & {
    background: rgb(128 102 99 / 82%);
    border: 10px solid rgb(108 76 71 / 82%);
  }
}
</style>
