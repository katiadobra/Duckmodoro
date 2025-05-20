import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import breakSoundFile from '../assets/sounds/garden-sunny-day.mp3'

export const useTimerStore = defineStore('timer', () => {
  const phases = ['focus', 'short-break', 'focus', 'short-break', 'focus', 'long-break']
  const currentPhaseIndex = ref(0)
  const currentPhase = computed(() => phases[currentPhaseIndex.value % phases.length])

  const durations = {
    // focus: 25 * 60, // 25 хв
    // 'short-break': 5 * 60, // 5 хв
    // 'long-break': 15 * 60, // 15 хв
    focus: 1, // 25 хв
    'short-break': 1, // 5 хв
    'long-break': 2, // 15 хв
  }

  const timeLeft = ref(0)
  const timer = ref(null)
  const isRunning = ref(false)
  const completedCycles = ref(0)

  const minutes = computed(() => String(Math.floor(timeLeft.value / 60)).padStart(2, '0'))
  const seconds = computed(() => String(timeLeft.value % 60).padStart(2, '0'))

  // 🎵 Підключення звуку
  const breakSound = new Audio(breakSoundFile)
  breakSound.volume = 0.1 // необов’язково: встановити гучність
  breakSound.loop = false

  // 👂 Спостерігаємо за фазою
  watch(currentPhase, (newPhase) => {
    timeLeft.value = durations[newPhase]

    if (['short-break', 'long-break'].includes(newPhase)) {
      breakSound.currentTime = 0
      breakSound.play()
    } else {
      breakSound.pause()
    }
  })

  function startTimer() {
    if (isRunning.value) return
    isRunning.value = true
    timer.value = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--
      } else {
        nextPhase()
      }
    }, 1000)
  }

  function pauseTimer() {
    clearInterval(timer.value)
    isRunning.value = false
  }

  function resetTimer() {
    pauseTimer()
    timeLeft.value = durations[currentPhase.value]
  }

  function nextPhase() {
    pauseTimer()
    // if (currentPhase.value === 'focus') {
    //   completedCycles.value++
    // }
    currentPhaseIndex.value++
    if (currentPhaseIndex.value >= phases.length) {
      currentPhaseIndex.value = 0
      completedCycles.value++
    }
    startTimer()
  }

  watch(currentPhaseIndex, (newIndex) => {
    const newPhase = phases[newIndex]
    timeLeft.value = durations[newPhase]

    if (['short-break', 'long-break'].includes(newPhase)) {
      breakSound.currentTime = 0
      breakSound.play()
    } else {
      breakSound.pause()
    }
  })

  return {
    currentPhase,
    currentPhaseIndex,
    phases,
    timeLeft,
    minutes,
    seconds,
    isRunning,
    completedCycles,
    startTimer,
    pauseTimer,
    resetTimer,
  }
})
