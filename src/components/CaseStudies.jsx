import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Link from 'next/link'
import Image from 'next/image'
import { useStore } from '@/store/zustand'
import Markdown from 'react-markdown'

export const CaseStudies = async () => {
  const {
    homepage: {
      data: {
        attributes: {
          Features: { title, description, featureCard: featureCards },
        },
      },
    },
  } = useStore.getState()

  return (
    <>
      <SectionIntro title={title} className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          <Markdown>{description}</Markdown>
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featureCards.map((caseStudy) => (
            <FadeIn key={caseStudy.dateSubtitle} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href="#">
                    <span className="absolute inset-0 rounded-3xl" />
                    {/* <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    /> */}
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  {/* <time
                    dateTime={caseStudy.dateSubtitle}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time> */}
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{caseStudy.dateSubtitle}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.Title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  <Markdown>{caseStudy.description}</Markdown>
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
