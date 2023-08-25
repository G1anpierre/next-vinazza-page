import { gql } from '@apollo/client'

export const query = gql`
  query {
    homepage {
      data {
        id
        attributes {
          title
          hero {
            title
            subtitle
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
          Features {
            title
            description
            featureCard {
              Title
              description
              dateSubtitle
            }
          }
          testimonial {
            text
            name
          }
          Services {
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
            ServiceCard {
              id
              title
              description
            }
          }
          contactCard {
            title
            subtitle
            sede {
              title
            }
            button {
              link {
                label
                href
              }
            }
          }
          footer {
            newsletter {
              title
              text
            }
            sections {
              title
              section {
                label
                href
                enumeration
              }
            }
          }
        }
      }
    }
  }
`
