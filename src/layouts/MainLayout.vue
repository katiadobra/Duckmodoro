<template>
  <q-layout view="lHh Lpr lFf" class="background-container">
    <transition name="fade">
      <img v-if="isDark" :src="nightImage" class="background-image" alt="Night background" />
      <img v-else :src="dayImage" class="background-image" alt="Day background" />
    </transition>

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

    <!-- <img src="/assets/background.png" alt="background" class="background-image" /> -->

    <DuckTimer />

    <PhaseTracker />

    <SoundToggle />

    <DuckView />
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
import nightImage from '/assets/background-night.png'

const $q = useQuasar()
const isDark = computed(() => $q.dark.isActive)

function toggleTheme() {
  $q.dark.toggle()
}
</script>

<style>
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
}
/* Transition effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
