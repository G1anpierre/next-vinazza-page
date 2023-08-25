import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { useStore } from '@/store/zustand'

export function ContactSection() {
  const {
    homepage: {
      data: {
        attributes: {
          contactCard: {
            title,
            subtitle,
            button: {
              link: { label, href },
            },
            sede,
          },
        },
      },
    },
  } = useStore.getState()

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-primary px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6 flex">
              <Button href={href} invert>
                {label}
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                {subtitle}
              </h3>
              <Offices
                invert
                sede={sede}
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
