export const progress = {
  state: {
    bestScore: 0
  },
  reducers: {
    updateBestScore(state, payload) {
      return { ...state, bestScore: payload }
    }
  }
}
