import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import { getClient } from '@/lib/client'
import { gql } from '@apollo/client'
import { Clients } from '@/components/Clients'
import { CaseStudies } from '@/components/CaseStudies'
import { Services } from '@/components/Services'

const query = gql`
  query {
    homepage {
      data {
        id
        attributes {
          title
          hero {
            title
            description
            image {
              data {
                attributes {
                  url
                  formats
                }
              }
            }
          }
        }
      }
    }
  }
`

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)
  const client = getClient()
  const {
    data: {
      homepage: {
        data: {
          attributes: {
            hero: { title, description },
          },
        },
      },
    },
  } = await client.query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  })

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            {title}
            <br />
            <span className="text-neutral-300">El Arte de Bailar</span>
          </h1>
          <p className="mt-6 text-xl text-neutral-600">{description}</p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
