import React from 'react'
import { useStaticQuery ,graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';

export const StartBlock = () => {
  const query = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "wearelegion_lander.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1920
            quality: 90
            traceSVG: { color: "#4b4e57" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const imageData = query.file.childImageSharp.fluid
  return (
    <div className='about'>
      <BackgroundImage
        Tag="section"
        className='about'
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
    </div>
  )
}

