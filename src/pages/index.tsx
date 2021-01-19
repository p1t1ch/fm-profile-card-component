import React from 'react'
import Seo from '@/components/Seo'
import ProfileCard from '@/components/ProfileCard'
import { ReactComponent as BgPatternTop } from '@/icons/bg-pattern-top.svg'
import { ReactComponent as BgPatternBottom } from '@/icons/bg-pattern-bottom.svg'
import imageVictor from '@/images/image-victor.jpg'

function IndexPage() {
  return (
    <main className="relative grid place-items-center overflow-hidden min-h-screen py-36 px-6 bg-primary-light">
      <Seo title="Frontend Mentor: Profile card component" />
      <BgPatternTop className="absolute inset-1/2 transform translate-x-circle-x translate-y-circle-y" />
      <ProfileCard
        avatar={imageVictor}
        name="Victor Crest"
        age={26}
        location="London"
        followers={80}
        likes={803}
        photos={1.4}
        className="z-10"
      />
      <BgPatternBottom className="absolute inset-1/2" />
    </main>
  )
}

export default IndexPage
