import { init } from '@rematch/core'
import persistPlugin from '@rematch/persist'
import storage from 'redux-persist/lib/storage'
import { levels } from './models/levels'
import { board } from './models/board'
import { progress } from './models/progress'
import { settings } from './models/settings'
import { modals } from './models/modals'

export const store = init({
  models: { levels, board, progress, settings, modals },
  plugins: [
    persistPlugin({
      key: import.meta.env.VITE_LOCAL_STORAGE_KEY,
      storage,
      blacklist: ['board', 'modals']
    })
  ]
})
