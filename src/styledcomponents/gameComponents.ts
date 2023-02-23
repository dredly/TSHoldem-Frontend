import styled from "styled-components"

// TODO: eliminate repetition

export const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const GameTable = styled.div`
    background: #183A1D;
    width: 1000px;
    height: 500px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HorizontalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PlayersContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1200px;
`
export const ReversedPlayersContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row-reverse;
    width: 1200px;
`

export const PlayerHolder = styled.div`
    background: pink;
`

export const CurrentPlayerHolder = styled.div`
    background: lightblue;
`