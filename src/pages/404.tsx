import React from 'react'
import { PageProps } from 'gatsby'
import Seo from '@/components/Seo'

const NotFoundPage = ({ location }: PageProps) => {
  return (
    <div className="p-4">
      <Seo />
      <h1 className="text-center text-xl">Error 404</h1>
      <p>Path &ldquo;{location.pathname}&rdquo; is not defined</p>
    </div>
  )
}

export default NotFoundPage
