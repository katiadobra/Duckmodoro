<template>
  <div>
    <img :src="duckImage" class="duck-img" />
  </div>
</template>

<script setup>
import { useTimerStore } from 'src/stores/timer'
import { storeToRefs } from 'pinia'
import working from '../assets/ducks/working.png'
import coffee from '../assets/ducks/coffee.png'
import relax from '../assets/ducks/relax.png'
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
.duck-img {
  width: 300px;
  height: auto;
}
</style>
