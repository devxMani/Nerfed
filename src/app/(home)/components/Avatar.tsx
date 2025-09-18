'use client'
import React from 'react'

const Avatar: React.FC = () => {
  return (
    <a href="https://x.com/devxMani" target="_blank" rel="noopener noreferrer">
      <img
        src="/space.jpeg"
        alt="Mani"
        width={96}
        height={96}
        className="rounded-full"
      />
    </a>
  )
}

export default Avatar
