import React from 'react'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { useStore } from '@/store/zustand'

export const Hero = () => {
  const {
    homepage: {
      data: {
        attributes: {
          hero: { title, subtitle, description },
        },
      },
    },
  } = useStore.getState()

  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          {title}
          <br />
          <span className="text-neutral-300">{subtitle}</span>
        </h1>
        <p className="mt-6 text-xl text-neutral-600">{description}</p>
      </FadeIn>
    </Container>
  )
}
