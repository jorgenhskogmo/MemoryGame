import { shuffledRandomCells } from 'src/helpers'
import { images } from 'src/store/sprites'

const init = {
  score: 0,
  success: 0,
  cells: images.slice(0, 8),
  openCells: [-1, -1],
  successCells: new Set(),
  currentId: null
}

export const board = {
  state: init,
  reducers: {
    reset(_, payload) {
      const cells = shuffledRandomCells(images, payload ** 2 / 2)
      return { ...init, cells, successCells: new Set() }
    },

    open(state, payload) {
      let { score, success, openCells, successCells, currentId } = state

      // closed first cell (open first cell)
      if (openCells[0] < 0) {
        openCells = [payload.i, -1]
        currentId = payload.id
        return { ...state, openCells, currentId }
      }

      // opened first cell and closed second (open second cell)
      if (openCells[0] >= 0 && openCells[1] < 0) {
        openCells[1] = payload.i
        score--
        // first cell === second cell
        if (currentId === payload.id) {
          successCells.add(payload.id)
          success++
          score += state.cells.length - state.successCells.size
        }
        return { ...state, score, success, openCells, successCells }
      }

      return state
    },

    hide(state) {
      return { ...state, openCells: [-1, -1] }
    }
  }
}
