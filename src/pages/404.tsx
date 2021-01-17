import React from 'react'
import { PageProps } from 'gatsby'
import Seo from '@/components/Seo'

const NotFoundPage = ({ location }: PageProps) => {
  return (
    <div>
      <Seo />
      <h1 css={{ textAlign: 'center' }}>Error 404</h1>
      <p>Path &ldquo;{location.pathname}&rdquo; is not defined</p>
    </div>
  )
}

export default NotFoundPage
