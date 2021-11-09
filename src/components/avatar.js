
import Image from 'next/image'

export default function Avatar({ name, picture }) {
  return (
    <div className="avatar-small">
      <Image className="rounded-circle" src={picture} alt={name} width={48} height={48} />
      <div className="text-center align-self-center ml-5">{name}</div>
    </div>
  )
}
