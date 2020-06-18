import styled from 'styled-components'

export const Results = styled.ul`
  display: block;
  height: 100%;
  overflow-x: auto;
  box-sizing: border-box;
  width: 100%;
`

export const ResultName = styled.li`
  list-style-type: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  margin: 5px 0;
  padding: 10px;
  display: block;
  width: 100%;
  font-family: 'Kalam';
  text-transform: uppercase;

  :hover {
    background: rgba(255, 255, 255, 0.8);
  }
`

export const ResultHeroName = styled.strong`
  display: block;
  font-family: 'Kalam';
  font-size: 22px;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`

export const Search = styled.input`
  font-size: 20px;
  outline: 0;
  padding: 8px 16px;
  line-height: 25px;
  border-radius: 6px;
  -webkit-appearance: none;
  color: #99a3ba;
  border: 1px solid #cdd9ed;
  transition: border 0.3s ease;

  &::placeholder {
    color: #cbd1dc;
  }

  &:focus {
    outline: none;
    border-color: #ffd300;
  }
`
