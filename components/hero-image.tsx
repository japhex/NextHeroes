import React from 'react'
import { Image, ImageContainer } from 'styled/hero-image.styled'
import HeroNames from './hero-names'
import { IHeroImage } from 'interfaces/hero'

interface HeroImageProps {
  name: string
  image: IHeroImage
  fullName: string
}

const HeroImage: React.FC<HeroImageProps> = ({ name, image, fullName }) => {
  const { url } = image

  const handleImageLoad = (e: any) => {
    e.target.style.visibility = 'visible'
  }

  const handleImageError = (e: any) => {
    e.target.onerror = null
    e.target.style.visibility = 'hidden'
  }

  return (
    <ImageContainer>
      <HeroNames name={name} fullName={fullName} />
      <Image
        src={url}
        alt={name}
        onError={(e: any) => handleImageError(e)}
        onLoad={(e: any) => handleImageLoad(e)}
      />
      <noscript>
        <Image src={url} alt={name} />
      </noscript>
    </ImageContainer>
  )
}

export default HeroImage
