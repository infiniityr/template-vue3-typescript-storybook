import { App } from 'vue'
import './style.css'

import * as components from './components'

export default {
  install (Vue: App) {
    for (const [name, component] of Object.entries(components)) {
      Vue.component(name, component)
    }
  }
}
