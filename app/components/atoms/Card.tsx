import Image from 'next/image'
import React from 'react'

export const Card = ({ title, url }: { title: string; url: string }) => {
  return (
    <div>
      <Image
        src={url}
        alt="ini card"
        width={110}
        height={146}
        className="rounded-lg min-h-[146px] min-w-[110px] object-cover"
        loading="lazy"
      />
      <p>{title}</p>
    </div>
  )
}
