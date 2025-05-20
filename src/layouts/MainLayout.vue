<template>
  <q-layout view="lHh Lpr lFf" class="main-bg">
    <q-page-container class="row items-center justify-between q-pa-lg">
      <div class="column items-start q-gutter-xl"></div>
      <div class="column items-center q-gutter-xl">
        <DuckTimer />
      </div>

      <div class="column items-end q-gutter-md">
        <PhaseTracker />
      </div>

      <div class="absolute-top-right q-ma-md">
        <SoundToggle />
      </div>
    </q-page-container>
    <q-page-container class="row items-start justify-between q-pa-xl">
      <div class="column items-start q-gutter-md">
        <DuckView />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import DuckTimer from 'src/components/DuckTimer.vue'
import DuckView from 'src/components/DuckView.vue'
import SoundToggle from 'src/components/SoundToggle.vue'
import PhaseTracker from 'src/components/PhaseTracker.vue'
</script>

<style>
.main-bg {
  background-image: url('../assets/background.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
</style>
