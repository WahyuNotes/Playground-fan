import React from 'react'

export const Button = ({
  className = 'bg-secondary-dark text-white px-6 py-3 font-medium text-lg rounded-xl',
  title,
}: {
  className?: string
  title?: string
}) => {
  return <button className={`${className}`}>{title}</button>
}
