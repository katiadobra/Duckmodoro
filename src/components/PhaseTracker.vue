<template>
  <div class="tracker-board column q-pa-sm text-bold">
    <div class="text-h6 text-bold text-center q-mb-sm">Today’s Session</div>
    <div
      v-for="(phase, index) in phases"
      :key="index"
      class="row flex items-center q-my-none q-pa-none text-h5 text-bold"
    >
      <q-icon
        :name="index === currentPhaseIndex && 'arrow_forward_ios'"
        :class="index === currentPhaseIndex && 'active on-left'"
        class="on-left"
        size="14px"
      />
      <span class="q-ml-sm" :class="index === currentPhaseIndex && 'active'">
        {{ formatPhase(phase) }}
      </span>
    </div>
    <span class="q-my-md text-subtitle1 text-bold">Completed cycles: {{ completedCycles }}</span>
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

<style scoped lang="scss">
.tracker-board {
  position: absolute;
  right: 30px;
  top: 23%;
  width: 200px;
  border-radius: 10px;
  background: #f3d69d;
  border: 5px solid;
  font-family: 'Quicksand', sans-serif;

  .body--dark & {
    background: var(--dark-blue-color);
    border-color: var(--navy-blue-color);
    opacity: 0.9;
  }

  @media (max-width: 680px) {
    display: none;
  }
}
.active {
  font-weight: bold;
  color: var(--active-color);
}
</style>
