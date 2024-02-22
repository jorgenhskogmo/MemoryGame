import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'
import Confetti from 'react-confetti'
import { CloseSvg, UpdateSvg, HomeSvg } from 'src/assets/icons'
import { useAudio } from 'src/hooks'
import './gameover.scss'

function GameOver() {
  const sfx = useAudio()
  const dispatch = useDispatch()
  const tweenDuration = 3000
  const [confetti, setConfetti] = useState(true)
  const { score } = useSelector((state) => state.board)
  const { bestScore } = useSelector((state) => state.progress)
  const { current } = useSelector((state) => state.levels)
  const { gameover } = useSelector((state) => state.modals)

  useEffect(() => {
    if (gameover) {
      setTimeout(() => {
        setConfetti(false)
      }, tweenDuration)
    }
  }, [gameover])

  function close() {
    setConfetti(true)
    dispatch.board.reset(current)
    dispatch.modals.close('gameover')
  }

  return (
    <>
      {gameover && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          run={gameover}
          recycle={confetti}
          numberOfPieces={50}
          tweenDuration={tweenDuration}
        />
      )}
      <Popup modal open={gameover} className="popup" closeOnDocumentClick={false} closeOnEscape={false}>
        <div className="gameover-header">
          <button className="popup__close-btn" onClick={close}>
            <CloseSvg />
          </button>
          <h1 className="gameover-title">You Win!</h1>
        </div>
        <div className="gameover-body">
          <div className="gameover-body-block">
            <p className="gameover-body-block__text">score: {score}</p>
            <p className="gameover-body-block__text">best: {Math.max(score, bestScore)}</p>
          </div>
          <div className="gameover-controls">
            <Link
              to="/game"
              className="gameover-controls__item"
              onClick={() => {
                sfx.reset.play()
                close()
              }}
            >
              <UpdateSvg className="reset-btn" />
            </Link>
            <Link
              to="/"
              className="gameover-controls__item"
              onClick={() => {
                sfx.move.play()
                close()
              }}
            >
              <HomeSvg className="home-btn" />
            </Link>
          </div>
        </div>
      </Popup>
    </>
  )
}

export default GameOver
