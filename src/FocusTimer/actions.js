import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'
import * as el from './elements.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  state.minutes = 25
  state.seconds = 0
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function plus() {
  const INCREMENT_NUMBER = 5
  state.minutes = state.minutes + INCREMENT_NUMBER // Vai incrimentar 5 minutos
  timer.updateDisplay(state.minutes, state.seconds)
  sounds.buttonPressAudio.play()
}

export function minus() {
  if (state.minutes <= 5) {
    state.minutes = 0
    timer.updateDisplay(state.minutes, state.seconds)
    return
  }

  const DECREMENT_NUMBER = 5
  state.minutes = state.minutes - DECREMENT_NUMBER // Vai decrementar 5 minutos
  timer.updateDisplay(state.minutes, state.seconds)
  sounds.buttonPressAudio.play()
}

function pauseSounds() {
  sounds.forest.pause()
  el.forest.classList.remove('active')
  sounds.rain.pause()
  el.rain.classList.remove('active')
  sounds.road.pause()
  el.road.classList.remove('active')
  sounds.fire.pause()
  el.fire.classList.remove('active')
}

export function forest() {
  if (!state.isForest) {
    pauseSounds()
    el.forest.classList.toggle('active')
    sounds.forest.play()
    state.isForest = true
  } else {
    el.forest.classList.toggle('active')
    state.isForest = false
    sounds.forest.pause()
  }
}

export function rain() {
  if (!state.isRain) {
    pauseSounds()
    el.rain.classList.toggle('active')
    sounds.rain.play()
    state.isRain = true
  } else {
    el.rain.classList.toggle('active')
    state.isRain = false
    sounds.rain.pause()
  }
}

export function road() {
  if (!state.isRoad) {
    pauseSounds()
    el.road.classList.toggle('active')
    sounds.road.play()
    state.isRoad = true
  } else {
    el.road.classList.toggle('active')
    state.isRoad = false
    sounds.road.pause()
  }
}

export function fire() {
  if (!state.isFire) {
    pauseSounds()
    el.fire.classList.toggle('active')
    sounds.fire.play()
    state.isFire = true
  } else {
    el.fire.classList.toggle('active')
    state.isFire = false
    sounds.fire.pause()
  }
}
