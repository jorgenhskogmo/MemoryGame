import { useSelector } from 'react-redux'
import useSound from 'use-sound'
import * as sfx from 'src/assets/audio'

function useAudio() {
  const soundEnabled = useSelector((state) => state.settings.soundEnabled)
  const audios = {}
  audios.win = useSound(sfx.win, { soundEnabled })
  audios.success = useSound(sfx.success, { soundEnabled })
  audios.move = useSound(sfx.move, { soundEnabled })
  audios.reset = useSound(sfx.reset, { soundEnabled })
  audios.whoosh = useSound(sfx.whoosh, { soundEnabled })

  const entries = Object.entries(audios)
  for (let i = 0; i < entries.length; i++) {
    audios[entries[i][0]] = { play: audios[entries[i][0]][0] }
  }

  return audios
}

export default useAudio
