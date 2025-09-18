'use client'
import React from 'react'

const Avatar: React.FC = () => {
  return (
    <div className="relative">
      {/* Lighting effect similar to RainbowButton */}
      <div className="absolute inset-0 rounded-full animate-rainbow bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] bg-[length:200%] blur-sm opacity-70 scale-110"></div>
      <div className="absolute inset-0 rounded-full animate-rainbow bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] bg-[length:200%] blur-md opacity-40 scale-125"></div>
      
      {/* Avatar */}
      <div className="relative z-10">
        <a href="https://x.com/devxMani" target="_blank" rel="noopener noreferrer">
          <img
            src="/space.jpeg"
            alt="Mani"
            width={96}
            height={96}
            className="rounded-full"
          />
        </a>
      </div>
    </div>
  )
}

export default Avatar
