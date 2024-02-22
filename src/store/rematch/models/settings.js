export const settings = {
  state: {
    soundEnabled: true
  },
  reducers: {
    enableSound(state) {
      return { ...state, soundEnabled: true }
    },

    disableSound(state) {
      return { ...state, soundEnabled: false }
    },

    toggleSound(state) {
      return { ...state, soundEnabled: !state.soundEnabled }
    }
  }
}
