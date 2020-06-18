export interface IHero {
  id?: number
  name?: string
  powerstats?: IHeroStats
  biography?: IHeroBio
  appearance?: IHeroAppearance
  work?: IHeroWork
  connections?: IHeroConnections
  image?: IHeroImage
}

export interface IHeroStats {
  intelligence: string
  strength: string
  speed: string
  durability: string
  power: string
  combat: string
}

export interface IHeroBio {
  'full-name': string
  'alter-egos': string
  aliases: string[]
  'place-of-birth': string
  'first-appearance': string
  publisher: string
  alignment: string
}

export interface IHeroAppearance {
  gender: string
  race: string
  height: string[]
  weight: string[]
  'eye-color': string
  'hair-color': string
}

export interface IHeroWork {
  occupation: string
  base: string
}

export interface IHeroConnections {
  'group-affiliation': string
  relatives: string
}

export interface IHeroImage {
  url: string
}
