import { CompetencesContainer, DevContainer, RowContainer } from "./styled"

const Competences = () => {
    return (
        <CompetencesContainer>
            <h2>O que faço?</h2>
            <RowContainer>
                <DevContainer>
                    <h1>Front-End</h1>
                    <p>
                        Desenvolvimento de aplicações
                        web utilizando ReactJS, HTML, CSS e
                        JavaScript.
                    </p>
                </DevContainer>

                <DevContainer>
                    <h1>Back-End</h1>
                    <p>
                        Aplicações utilizando NodeJS,
                        Typescript e MySQL.
                        Criação de APIs para
                        comunicação com front-end
                        seguindo princípio de Clean Code.
                    </p>
                </DevContainer>
            </RowContainer>
        </CompetencesContainer>
    )
}

export default Competences