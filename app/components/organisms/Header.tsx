import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <header className="px-5 fixed w-screen shadow-md shadow-black py-6 bg-primary-dark flex justify-between">
      <p className="text-white">ini logo</p>
      <Image
        src={'/assets/alert.svg'}
        alt="ini logo"
        width={24}
        height={24}
        className=""
      />
    </header>
  )
}
