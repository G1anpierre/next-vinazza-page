import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Testimonial } from '@/components/Testimonial'
import imageLaptop from '@/images/laptop.jpg'
import { getClient } from '@/lib/client'
import { gql } from '@apollo/client'
import { Clients } from '@/components/Clients'
import { CaseStudies } from '@/components/CaseStudies'
import { Services } from '@/components/Services'
import { Hero } from '@/components/Hero'
import { query } from '@/graphql/strapiquery'
import { useStore } from '@/store/zustand'

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <CaseStudies />
      <Testimonial className="mt-24 sm:mt-32 lg:mt-40" />
      <Services />
      <ContactSection />
    </>
  )
}
