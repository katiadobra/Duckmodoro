<template>
  <img :src="duckImage" class="duck" />
</template>

<script setup>
import { useTimerStore } from 'src/stores/timer'
import { storeToRefs } from 'pinia'
import working from '/assets/ducks/working.png'
import coffee from '/assets/ducks/coffee.png'
import relax from '/assets/ducks/relax.png'
import { computed } from 'vue'
// import { useSoundStore } from 'src/stores/sound'

const store = useTimerStore()
const { currentPhase } = storeToRefs(store)

const duckImage = computed(() => {
  switch (currentPhase.value) {
    case 'focus':
      return working
    case 'short-break':
      return coffee
    case 'long-break':
      return relax
    default:
      return working
  }
})
</script>

<style scoped>
.duck {
  position: absolute;
  bottom: 20%;
  right: 12%;
  width: 250px; /* або responsive: clamp(80px, 10vw, 140px) */
  transform: translate(-50%, 0); /* щоб точка привʼязки була по центру качки */
  pointer-events: none;

  .body--dark & {
    filter: brightness(0.7);
    transition: filter 2s ease;
  }
}
</style>
