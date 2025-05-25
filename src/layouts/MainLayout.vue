<template>
  <q-layout view="lHh Lpr lFf" class="background-container" ref="containerRef">
    <h1 class="h1">Duck Studio</h1>
    <img
      ref="bgRef"
      :alt="isDark ? 'Night background' : 'Day background'"
      :src="dayImage"
      class="background-image"
      :class="{ 'dark-mode': isDark }"
      @load="positionDuck"
    />

    <DuckView v-if="duckVisible" :style="duckStyle" />

    <div class="absolute-top-right q-ma-md">
      <q-btn
        dense
        flat
        round
        icon="brightness_6"
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to Day' : 'Switch to Night'"
      />
    </div>

    <DuckTimer />

    <PhaseTracker />

    <SoundToggle />
  </q-layout>
</template>

<script setup>
import DuckTimer from 'src/components/DuckTimer.vue'
import DuckView from 'src/components/DuckView.vue'
import SoundToggle from 'src/components/SoundToggle.vue'
import PhaseTracker from 'src/components/PhaseTracker.vue'
import { useQuasar } from 'quasar'
import { computed } from 'vue'
import dayImage from '/assets/background-day.png'

const $q = useQuasar()
const isDark = computed(() => $q.dark.isActive)

function toggleTheme() {
  $q.dark.toggle()
}

import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
// Reference to the background image and container
const bgRef = ref(null)
const containerRef = ref(null)
const duckVisible = ref(false)
const duckStyle = reactive({ top: '0px', left: '0px' })

// Positioning constants
// These values are based on the design mockup
// Adjust these values to position the duck correctly
const anchorX = 0.606
const anchorY = 0.837

function positionDuck() {
  const img = bgRef.value
  const container = containerRef.value
  if (!img || !container) return

  const rect = img.getBoundingClientRect()
  if (rect.width === 0 || rect.height === 0) return

  const x = rect.left + rect.width * anchorX
  const y = rect.top + rect.height * anchorY

  duckStyle.left = `${x}px`
  duckStyle.top = `${y}px`
  duckVisible.value = true
}
onMounted(() => {
  window.addEventListener('resize', positionDuck)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', positionDuck)
})
</script>

<style lang="scss">
.h1 {
  text-align: center;
  font-weight: 600;
}
.background-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  /* transition: filter 0.6s ease-in-out; */
}
.dark-mode {
  filter: hue-rotate(180deg) saturate(1.5) brightness(55%);
}
</style>
