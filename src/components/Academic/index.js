import { AcademicContainer, RowContainer, CourseContainer } from "./styled"

const Academic = () => {
    return (
        <AcademicContainer>
            <h2>Educação</h2>
            <RowContainer>
                <CourseContainer>
                    <h2>Curso de Web Full Stack na Labenu</h2>
                    <p>6 meses - 2020</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alaliquipdolcillum dolore eu fugiat nulla pariatur.
                    </p>
                </CourseContainer>

                <CourseContainer>
                    <h2>Curso de Web Full Stack na Labenu</h2>
                    <p>6 meses - 2020</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Ut enim consequat. Duis aute irure dolor cillum dolore eu fugiat nulla pariatur.
                    </p>
                </CourseContainer>
            </RowContainer>
        </AcademicContainer>
    )
}

export default Academic