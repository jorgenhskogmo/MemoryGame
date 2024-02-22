import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ChangeLevel from './components/changelevel/ChangeLevel'
import { useEffect } from 'react'
import { PlaySvg, AudioOnSvg, AudioOffSvg } from 'src/assets/icons'
import { useAudio } from 'src/hooks'
import './home.scss'

function Home() {
  const dispatch = useDispatch()
  const { soundEnabled } = useSelector((state) => state.settings)
  const sfx = useAudio()

  useEffect(() => {
    soundEnabled && sfx.move.play()
  }, [soundEnabled])

  return (
    <div className="home">
      <header>
        <div className="settings">
          <button className="settings-btn" onClick={() => dispatch.settings.toggleSound()}>
            {soundEnabled ? <AudioOnSvg /> : <AudioOffSvg />}
          </button>
        </div>
        <h1 className="title">Memory game</h1>
      </header>
      <main>
        <ChangeLevel />
      </main>
      <footer>
        <Link to="/game" className="play-btn" onClick={sfx.move.play}>
          <PlaySvg />
          <div>play</div>
        </Link>
      </footer>
    </div>
  )
}

export default Home
