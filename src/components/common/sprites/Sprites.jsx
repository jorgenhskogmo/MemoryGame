import spritesSvg from 'src/assets/icons/sprites.svg'

function Sprites({ id, className }) {
  return (
    <svg className={className}>
      <use href={`${spritesSvg}#${id}`} />
    </svg>
  )
}

export default Sprites
