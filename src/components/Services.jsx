import React from 'react'
import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { List, ListItem } from '@/components/List'
import imageLaptop from '@/images/laptop.jpg'
import { useStore } from '@/store/zustand'
import Markdown from 'react-markdown'

export const Services = () => {
  const {
    homepage: {
      data: {
        attributes: {
          Services: {
            title,
            description,
            image: {
              data: {
                attributes: { url },
              },
            },
            ServiceCard,
          },
        },
      },
    },
  } = useStore.getState()

  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title={title}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          <Markdown>{description}</Markdown>
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={url}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            {ServiceCard.map((service) => (
              <ListItem key={service.id} title={service.title}>
                <Markdown>{service.description}</Markdown>
              </ListItem>
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}
