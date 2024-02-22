export const levels = {
  state: {
    items: [2, 4, 6, 8],
    current: 4
  },
  reducers: {
    change(state, payload) {
      return { ...state, current: payload }
    }
  }
}
