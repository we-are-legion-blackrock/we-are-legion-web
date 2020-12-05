import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { withMenuComponentBlock } from './withMenuComponentBlock';



export const StartBlock = withMenuComponentBlock({
  id: 'about',
  Component: ({ className }) => (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "wow-background.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <div className='columns'>
              <div className='column is-3  is-size-2-desktop is-size-4-touch'>
                <div className='brand-name has-text-left brand-name-900'>We Are Legion</div>
                <div className='brand-name has-text-centered brand-name-600'>Blackrock</div>
              </div>
            </div>
            <div className='columns'>
              <div className='column is-3 is-size-2-desktop is-size-4-touch'>
                <div className='brand-name has-text-left  brand-name-900'>Gestalte</div>
                <div className='brand-name has-text-left brand-name-600'> unsere progressorienterte und geile Gemeinschaft mit</div>
              </div>
            </div>
          </BackgroundImage>
        )
      }}
    />
  )
})