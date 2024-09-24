import React from 'react'

export const ButtonSecondary = ({
  className = 'text-secondary-dark border-secondary-dark border-2 px-6 py-3 font-medium text-lg rounded-xl',
  title,
}: {
  className?: string
  title?: string
}) => {
  return <button className={`${className}`}>{title}</button>
}
