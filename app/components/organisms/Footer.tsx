import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="px-5 py-6 bg-primary-dark flex justify-between text-white">
      <ButtonFooter title="Home" icon="home.svg" />
      <ButtonFooter title="Search" icon="search.svg" />
      <ButtonFooter title="Profile" icon="profile.svg" />
    </footer>
  )
}

const ButtonFooter = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <button className="flex flex-col items-center justify-center ">
      <Image
        src={`/assets/${icon}`}
        width={24}
        height={24}
        alt={`${title} Icon`}
      />
      <p>{title}</p>
    </button>
  )
}
