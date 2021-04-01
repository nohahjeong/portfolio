import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 580px;
    display: flex;
    flex-direction: column;
    background-color: rgba(6, 52, 71, 0.45);
    font-family: Montserrat;
    color: #ffffff;
`

export const FirstRow = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
`

export const Name = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
`

export const Nav = styled.div`
    width: 270px;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
`

export const SecondRow = styled.div`
    height: 90%;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
`

export const Social = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 2.4rem;
`

export const Intro = styled.div`
    width: 70%;
    padding-left: 20%;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 3rem;
        margin: 0.4rem;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: normal;
        margin: 0.4rem;
    }

    p {
        margin: 0.4rem;
    }
`