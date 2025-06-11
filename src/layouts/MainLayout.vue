<template>
  <div class="page-wrapper">
    <div class="container">
      <h1 class="h1">Duck Studio</h1>
      <picture class="picture-wrapper">
        <!--  max 600px -->
        <source :srcset="xsImage" media="(max-width: 600px)" />

        <!-- max 1024px -->
        <!-- <source :srcset="xsImage" media="(max-width: 1024px)" /> -->

        <!-- min 1024px -->
        <img
          ref="bgRef"
          :src="dayImage"
          :alt="isDark ? 'Night background' : 'Day background'"
          class="background-image"
          :class="{ 'dark-mode': isDark }"
        />
      </picture>

      <DuckView class="duck-view" />

      <q-btn
        dense
        flat
        icon="brightness_6"
        class="action-btn mode-btn"
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to Day' : 'Switch to Night'"
      />

      <DuckTimer />

      <PhaseTracker />

      <SoundToggle />
    </div>
  </div>
</template>

<script setup>
import DuckTimer from 'src/components/DuckTimer.vue'
import DuckView from 'src/components/DuckView.vue'
import SoundToggle from 'src/components/SoundToggle.vue'
import PhaseTracker from 'src/components/PhaseTracker.vue'
import { useQuasar } from 'quasar'
import { computed } from 'vue'
import dayImage from '/assets/background-day.png'
import xsImage from '/assets/background-xs.png'
import '../css/app.scss'

const $q = useQuasar()
const isDark = computed(() => $q.dark.isActive)

function toggleTheme() {
  $q.dark.toggle()
}
</script>

<style lang="scss" scoped>
.h1 {
  display: none;
  position: fixed;
  top: 6%;
  font-size: 3.8rem;
  text-align: center;
  font-weight: 600;
  z-index: 1;
}
.page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  width: min(100vw, 1900px);
  height: 100vh;
  border: 4px solid var(--dark-color);
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}
.picture-wrapper {
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
}
.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  clip-path: inherit;
  z-index: 0;
}
.dark-mode {
  filter: hue-rotate(180deg) saturate(1.5) brightness(55%);
}
.action-btn.mode-btn {
  right: 20px;
  font-size: 1.1rem;
}

@media (min-width: 600px) {
  .h1 {
    display: block;
    top: 5%;
    font-size: clamp(3rem, 6rem, 10rem);
  }

  .container {
    width: min(90vw, 1900px);
    height: 90vh;
    border: solid 7px var(--dark-color);
    box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  }
  .background-image {
    box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  }

  .action-btn.mode-btn {
    font-size: clamp(1.1rem, 1.5rem, 2rem);
  }
}
</style>
