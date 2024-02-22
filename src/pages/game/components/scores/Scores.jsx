import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { UpdateSvg, HomeSvg } from 'src/assets/icons'
import { useAudio } from 'src/hooks'
import './scores.scss'

function Scores() {
  const dispatch = useDispatch()
  const { score, success } = useSelector((state) => state.board)
  const { current } = useSelector((state) => state.levels)
  const sfx = useAudio()

  function flushScores() {
    sfx.reset.play()
    dispatch.board.reset(current)
  }

  return (
    <header>
      <div className="scores">
        <div className="trying">Score: {score}</div>
        <button className="scores-btn">
          <UpdateSvg className="reset-btn" onClick={flushScores} />
        </button>
        <Link to="/" className="scores-btn" onClick={sfx.move.play}>
          <HomeSvg className="home-btn" />
        </Link>
        <div className="success">
          Success: {success} / {current ** 2 / 2}
        </div>
      </div>
    </header>
  )
}

export default Scores
