import { Link } from 'react-router-dom'
import { UpdateSvg, HomeSvg, PlaySvg } from 'src/assets/icons'
import './controls.scss'

function Controls() {
  function flushScores() {
    console.log('reset scores')
  }

  return (
    <footer>
      <div className="controls">
        <button className="controls-btn">
          <UpdateSvg className="reset-btn" onClick={flushScores} />
        </button>
        <Link to="/" className="controls-btn">
          <HomeSvg className="home-btn" />
        </Link>
        <button className="controls-btn">
          <PlaySvg className="sounds-btn" onClick={flushScores} />
        </button>
      </div>
    </footer>
  )
}

export default Controls
