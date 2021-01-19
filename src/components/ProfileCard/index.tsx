import React from 'react'
import { ReactComponent as BgPatternCard } from '@/icons/bg-pattern-card.svg'
import Count from '@/components/Count'

interface ProfileCardProps extends React.HTMLProps<HTMLDivElement> {
  avatar: string
  name: string
  age: number
  location: string
  followers: number
  likes: number
  photos: number
}

function ProfileCard({
  avatar,
  name,
  age,
  location,
  followers,
  likes,
  photos,
  className = '',
  ...props
}: ProfileCardProps) {
  return (
    <article className={`w-full max-w-sm bg-white rounded-2xl overflow-hidden ${className}`} {...props}>
      <section className="grid grid-area-container justify-items-center items-end">
        <BgPatternCard className="grid-area max-w-full" />
        <img
          src={avatar}
          alt="Victor avatar"
          width="106"
          height="106"
          className="grid-area transform translate-y-1/2 rounded-full border-5 border-white"
        />
      </section>
      <section className="p-6 pt-18 pb-5 text-center">
        <div className="mb-1 text-lg">
          <h1 className="inline-block text-primary font-bold mr-2">{name}</h1>
          <span className="text-primary-dark">{age}</span>
        </div>
        <div className="text-primary-dark text-sm">{location}</div>
      </section>
      <section className="border-t border-neutral p-6">
        <ul className="grid grid-flow-col place-items-center">
          <Count name="Followers" count={followers} />
          <Count name="Likes" count={likes} />
          <Count name="Photos" count={photos} />
        </ul>
      </section>
    </article>
  )
}

export default ProfileCard
