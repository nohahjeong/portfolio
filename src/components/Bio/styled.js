import styled from 'styled-components'

export const BioContainer = styled.div`
    width: 100vw;
    height: 440px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #063447;
    color: #ffffff;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;

    .photo {
        width: 305px;
        height: 305px;
    }
`

export const BioText = styled.div`
    width: 370px;
    height: 305px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
