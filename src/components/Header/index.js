import { HeaderContainer, FirstRow, Name, Nav, SecondRow, Social, Intro } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <HeaderContainer>
            <FirstRow>
                <Name>Noh Ah</Name>

                <Nav><p>quem sou</p><p>projetos</p><p>contato</p></Nav>
            </FirstRow>

            <SecondRow>
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
            </SecondRow>
        </HeaderContainer>
    )
}

export default Header