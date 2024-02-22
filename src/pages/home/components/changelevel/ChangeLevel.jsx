import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { useAudio } from 'src/hooks'
import './changelevel.scss'

function ChangeLevel() {
  const dispatch = useDispatch()
  const { items, current } = useSelector((state) => state.levels)
  const sfx = useAudio()

  function change(level) {
    sfx.move.play()
    dispatch.levels.change(level)
  }

  return (
    <div className="change-level">
      {items.map((level) => {
        return (
          <div
            key={level}
            data-id={level}
            className={classNames('change-level__item', { active: level === current })}
            onClick={() => change(level)}
          >
            {level}x{level}
          </div>
        )
      })}
    </div>
  )
}

export default ChangeLevel
