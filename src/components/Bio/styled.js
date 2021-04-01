import styled from 'styled-components'

export const BioContainer = styled.div`
    width: 100vw;
    height: 440px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;

    background-color: #063447;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 10vw;

    .photo {
        width: 30vw;
        max-width: 305px;
        height: 30vw;
        max-height: 305px;
    }
`

export const BioText = styled.div`
    width:40vw;
    max-width: 500px;
    height:30vw;
    max-height: 305px;
    display: flex;
    flex-direction: column;
    gap: .4rem;
`
