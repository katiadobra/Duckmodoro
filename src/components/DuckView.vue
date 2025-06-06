<template>
  <img :src="duckImage" class="duck" :style="style" />
</template>

<script setup>
import { useTimerStore } from 'src/stores/timer'
import { storeToRefs } from 'pinia'
import working from '/assets/ducks/working.png'
import coffee from '/assets/ducks/coffee.png'
import relax from '/assets/ducks/relax.png'
import { computed } from 'vue'

defineProps({
  style: Object,
})

const store = useTimerStore()
const { currentPhase } = storeToRefs(store)

// 🦆
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

<style lang="scss" scoped>
.duck {
  position: absolute;
  left: 59%;
  top: 84%;
  width: 310px;
  transform: translate(-50%, -100%);
  pointer-events: none;
  z-index: 2;

  .body--dark & {
    filter: brightness(0.8);
  }

  @media (max-width: 600px) {
    left: 75%;
    top: 81%;
    width: 200px;
  }
}
</style>
