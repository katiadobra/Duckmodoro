<template>
  <div class="tracker-board column q-pa-sm shadow-2">
    <div class="text-subtitle2 text-bold text-center q-mb-sm">Today’s Session</div>
    <div v-for="(phase, index) in phases" :key="index" class="row items-center q-my-xs">
      <q-icon
        :name="index === currentPhaseIndex ? 'arrow_right' : 'fiber_manual_record'"
        :color="index === currentPhaseIndex ? 'primary' : 'grey-5'"
        size="16px"
      />
      <span class="q-ml-sm">{{ formatPhase(phase) }}</span>
    </div>
    <span class="q-ml-sm">Completed cycles:{{ completedCycles }}</span>
  </div>
</template>

<script setup>
import { useTimerStore } from 'src/stores/timer'
import { storeToRefs } from 'pinia'

const store = useTimerStore()
const phases = ['focus', 'short-break', 'focus', 'short-break', 'focus', 'long-break']
const { currentPhaseIndex, completedCycles } = storeToRefs(store)

function formatPhase(phase) {
  switch (phase) {
    case 'focus':
      return 'Focus'
    case 'short-break':
      return 'Short Break'
    case 'long-break':
      return 'Long Break'
    default:
      return phase
  }
}
</script>

<style scoped>
.tracker-board {
  position: absolute;
  right: 0;
  top: 22%;
  width: 160px;
  border-radius: 8px;
  background: #fffbea;
  border: 10px solid #dec9a4;
  font-family: 'Quicksand', sans-serif;

  .body--dark & {
    background: rgb(128 102 99 / 82%);
    border: 10px solid rgb(108 76 71 / 82%);
  }
}
</style>
