<template>
  <div class="tracker-board column items-center q-pa-md">
    <div class="text-h4 text-bold text-center">{{ phaseText }}</div>
    <div class="text-h2 q-my-md text-bold">{{ minutes }}:{{ seconds }}</div>
    <div v-if="store.isPhaseComplete" class="text-subtitle1 text-center q-mb-sm">
      Break is over! Start when you're ready
    </div>
    <div class="row q-gutter-sm">
      <q-btn
        class="btn-start"
        :label="store.isPhaseComplete ? 'Next Phase' : 'Start'"
        @click="start"
        size="lg"
        unelevated
      />
      <q-btn class="btn-pause" label="Pause" @click="pause" size="lg" unelevated />
      <q-btn class="btn-reset" label="Reset" @click="reset" size="lg" unelevated />
    </div>
  </div>
</template>

<script setup>
import { useTimerStore } from 'src/stores/timer'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = useTimerStore()
const { minutes, seconds, currentPhase } = storeToRefs(store)

const phaseText = computed(() => {
  switch (currentPhase.value) {
    case 'focus':
      return 'Focus Time'
    case 'short-break':
      return 'Short Break'
    case 'long-break':
      return 'Long Break'
    default:
      return 'Focus Time'
  }
})

const start = () => store.startTimer()
const pause = () => store.pauseTimer()
const reset = () => store.resetTimer()
</script>

<style scoped lang="scss">
.tracker-board {
  position: absolute;
  bottom: 16%;
  left: 41%;

  max-width: 200px;
  border-radius: 10px;
  // background: #f3d69d;
  background-color: rgba($color: #f3d69d, $alpha: 0.8);
  border: 5px solid;
  font-family: 'Quicksand', sans-serif;

  .body--dark & {
    background: var(--dark-blue-color);
    border-color: var(--navy-blue-color);
    opacity: 0.9;
  }

  button {
    width: 100%;
    border-radius: 5px;
  }

  @media (min-width: 680px) {
    bottom: 1%;
    left: 10%;
    max-width: 300px;
  }
}

.btn-start {
  background-color: var(--start-bg);
  color: var(--start-text);
  border: 3px solid var(--start-border-color);
}

.btn-pause {
  background-color: var(--pause-bg);
  color: var(--pause-text);
  border: 3px solid var(--pause-border-color);
}

.btn-reset {
  background-color: var(--reset-bg);
  color: var(--reset-text);
  border: 3px solid var(--reset-border-color);
}
</style>
