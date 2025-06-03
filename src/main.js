import './style.css'
import { initCanvas } from './js/canvas'
import { createDOM } from './js/dom'
import { initScrollBehavior } from './js/scroll'

// Create DOM elements
createDOM()

// Initialize features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initCanvas()
  initScrollBehavior()
})