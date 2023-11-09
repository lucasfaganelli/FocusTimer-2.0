import { controls, forest, rain, road, fire } from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
  controls.addEventListener('click', event => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })

  forest.addEventListener('click', event => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })

  rain.addEventListener('click', event => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })

  road.addEventListener('click', event => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })

  fire.addEventListener('click', event => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}
