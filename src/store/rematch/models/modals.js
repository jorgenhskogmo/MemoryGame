export const modals = {
  state: {
    gameover: false
  },
  reducers: {
    open(state, name) {
      return { ...state, [name]: true }
    },

    close(state, name) {
      return { ...state, [name]: false }
    }
  }
}
