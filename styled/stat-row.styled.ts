import styled from 'styled-components'

interface StatContainerProps {
  readonly multi?: boolean
  readonly stack?: boolean
  readonly align?: string
}

export const StatContainer = styled.div<StatContainerProps>`
  width: 100%;
  display: ${props => (props.multi ? 'flex' : 'block')};
  margin-top: ${props => (props.multi ? '20px' : '0')};

  div {
    flex-direction: ${props => (props.stack ? 'column' : 'none')};
    margin-bottom: ${props => (props.stack ? '10px' : '0')};

    span {
      text-align: ${props => (props.align === 'left' ? 'left' : 'center')};
    }
  }
`

interface StatProps {
  readonly icon?: boolean
}

export const Stat = styled.div<StatProps>`
  display: flex;
  font-size: 13px;
  margin: 0 5px 5px;
  position: relative;
  overflow: hidden;
  padding: 5px 3px 5px 0;

  &:first-child {
    padding-top: 0;
  }

  > span {
    display: flex;
    padding: 5px;
    position: relative;
    z-index: 2;
    align-items: center;
    background-color: ${props => props.theme.colors.yellow};
    background-image: url('https://www.transparenttextures.com/patterns/cardboard.png');
    width: 80%;
    border: 2px solid;
    font-size: 16px;
    font-family: ${props => props.theme.fonts.heroName};
  }

  > span:first-child {
    -webkit-clip-path: polygon(0 0, 100% 0%, 87% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 87% 100%, 0% 100%);
  }

  > span:last-child {
    justify-content: flex-end;
    -webkit-clip-path: polygon(13% 0, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(13% 0, 100% 0%, 100%% 100%, 0% 100%);
  }
`

export const StatBasic = styled.div<StatProps>`
  font-size: 15px;
  width: 100%;

  > span {
    font-family: ${props => props.theme.fonts.heroName};
  }

  > span:first-child {
    display: block;
    font-weight: bold;
  }
`

export const StatBackground = styled.div`
  background: #000;
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0%, 84% 100%, 0% 100%);
  right: 98px;
  top: 5px;
`

export const SecondStatBackground = styled.div`
  background: #000;
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: 1;
  clip-path: polygon(16% 0, 100% 0%, 100% 100%, 0% 100%);
  right: -1px;
  top: 5px;
`

export const StatImage = styled.img`
  height: 40px;
`

interface ValueProps {
  readonly value?: string
}

export const Value = styled.div<ValueProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 16px;
  font-weight: bold;
  color: ${props =>
    parseInt(props.value) === 100 ? props.theme.colors.red : '#000'};
  font-family: ${props => props.theme.fonts.heroName};
  padding-top: 5px;
`
