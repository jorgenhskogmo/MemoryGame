import { Scores, Board } from './components'
import './game.scss'

function Game() {
  return (
    <div className="game">
      <Scores />
      <Board />
    </div>
  )
}

export default Game
