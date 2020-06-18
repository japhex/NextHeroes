import styled from 'styled-components'

export const BattleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const BattleVsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 20px;
  font-size: 50px;
`

interface HeroBoxProps {
  readonly opposite?: boolean
}

export const HeroBox = styled.div<HeroBoxProps>`
  position: relative;
  border-radius: 20px;
  height: 650px;
  width: 354px;
  padding: 30px;
  background-color: ${props => props.theme.colors.brown};
  background-image: url('https://www.transparenttextures.com/patterns/asfalt-dark.png');
  box-shadow: -1px 0px 15px -6px rgba(0, 0, 0, 0.75);
  transform: ${props => (props.opposite ? 'rotate(-2deg)' : 'rotate(2deg)')};
`

export const HeroName = styled.h1`
  position: absolute;
  bottom: 120px;
  right: 10px;
  z-index: 2;
  background-color: ${props => props.theme.colors.yellow};
  background-image: url('https://www.transparenttextures.com/patterns/cardboard.png');
  padding: 10px;
  border: 2px solid;
  font-family: ${props => props.theme.fonts.heroData};
  text-transform: uppercase;
  transform: rotate(-5deg);
`

export const HeroRealName = styled.h1`
  position: absolute;
  top: 10px;
  left: -5px;
  z-index: 2;
  background-color: ${props => props.theme.colors.yellow};
  background-image: url('https://www.transparenttextures.com/patterns/cardboard.png');
  padding: 10px;
  border: 2px solid;
  font-family: ${props => props.theme.fonts.heroData};
  font-size: 16px;
  text-transform: uppercase;
  transform: rotate(-2deg);
`

interface CardSectionProps {
  readonly pullUp?: boolean
}

export const CardSection = styled.div<CardSectionProps>`
  display: flex;
  position: relative;
  top: ${props => (props.pullUp ? '-120px' : 0)};
`

export const StatsSectionLeft = styled.div`
  width: 35%;
  background-color: ${props => props.theme.colors.blue};
  padding: 10px;
  border: 2px solid;
  font-family: ${props => props.theme.fonts.heroName};
  line-height: 12px;
  background-image: url('https://www.transparenttextures.com/patterns/cardboard.png');
`

export const StatsSectionRight = styled.div`
  width: 65%;
  font-family: ${props => props.theme.fonts.heroName};
`
