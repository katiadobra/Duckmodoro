import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    time: 25 * 60,
    isRunning: false,
    isWorkSession: true,
    completedCycles: 0,
  }),
  actions: {
    start() {
      this.isRunning = true
    },
    pause() {
      this.isRunning = false
    },
    reset() {
      this.pause()
      this.time = this.isWorkSession ? 25 * 60 : 5 * 60
    },
    tick() {
      if (this.time > 0) {
        this.time--
      } else {
        this.sessionEnd()
      }
    },
    sessionEnd() {
      this.pause()
      if (this.isWorkSession) {
        this.completedCycles++
        this.isWorkSession = false
        this.time = this.completedCycles % 4 === 0 ? 15 * 60 : 5 * 60
      } else {
        this.isWorkSession = true
        this.time = 25 * 60
      }
    }
  },
  getters: {
    formattedTime: (state) => {
      const minutes = String(Math.floor(state.time / 60)).padStart(2, '0')
      const seconds = String(state.time % 60).padStart(2, '0')
      return `${minutes}:${seconds}`
    }
  }
})
