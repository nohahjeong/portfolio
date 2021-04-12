import { AcademicContainer, RowContainer, CourseContainer } from "./styled"

const Academic = () => {
    return (
        <AcademicContainer>
            <h2>Educação</h2>
            <RowContainer>
                <CourseContainer>
                    <h2>Universidade de São Paulo</h2>
                    <p>6 anos - (2013 - 2019)</p>
                    <p>
                        Bacharel em Farmácia-Bioquímica na Faculdade de Ciências Farmacêuticas da Universidade de São Paulo.
                    </p>
                </CourseContainer>

                <CourseContainer>
                    <h2>Labenu</h2>
                    <p>6 meses - (2020 - 2021)</p>
                    <p>
                        A Labenu é uma startup que forma Desenvolvedores Web Full Stack prontos para o mercado de trabalho. São mais de 1000 horas de programação que faz com que seus alunos, ao final do curso, sejam profissionais completos tanto no Back-End quanto no Front-End.
                    </p>
                </CourseContainer>
            </RowContainer>
        </AcademicContainer>
    )
}

export default Academic