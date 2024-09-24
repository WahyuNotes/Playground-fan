import Image from 'next/image'
import React from 'react'

export const ButtonIcon = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <button>
      <Image src={'/assets/' + img} alt={alt ?? ''} height={24} width={24} />
    </button>
  )
}
