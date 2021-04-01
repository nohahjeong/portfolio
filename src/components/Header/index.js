import { HeaderContainer, FirstRowContainer, NavContainer, SecondRowContainer, Social, Intro } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <HeaderContainer>
            <FirstRowContainer>
                <h2><b>Noh Ah</b></h2>

                <NavContainer>
                    <p>quem sou</p>
                    <p>projetos</p>
                    <p>contato</p>
                </NavContainer>
            </FirstRowContainer>

            <SecondRowContainer>
                <Social>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <FontAwesomeIcon icon={faGithub} />
                </Social>

                <Intro>
                    <h1>Eu sou</h1>
                    <h1>Noh Ah Jeong</h1>
                    <h2>Desenvolvedor Web Full Stack</h2>
                    <p>Apaixonado por tecnologia e programação</p>
                </Intro>
            </SecondRowContainer>
        </HeaderContainer>
    )
}

export default Header