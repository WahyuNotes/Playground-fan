import React from 'react'
import PageLayout from '../components/templates/PageLayout'
import { ButtonIcon } from '../components/atoms/ButtonIcon'

const DetailMovie = () => {
  return (
    <PageLayout
      title="Top Gun: Maverick"
      children2={<ButtonIcon img="bookmark.svg" alt="bookmark icon" />}
    >
      <div>DetailMovie</div>
    </PageLayout>
  )
}

export default DetailMovie
