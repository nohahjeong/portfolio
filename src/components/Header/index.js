import { HeaderContainer, FirstRowContainer, NavContainer, SecondRowContainer, Social, Intro } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <HeaderContainer>
            <FirstRowContainer>
                <h2><b>Noh Ah</b></h2>

                <NavContainer>
                    <a href='#bio'>quem sou</a>
                    {/* <a>projetos</a> */}
                    <a href='#contact'>contato</a>
                </NavContainer>
            </FirstRowContainer>

            <SecondRowContainer>
                <Social>
                    <a href='https://www.linkedin.com/in/noh-ah-jeong/' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} color='white' />
                    </a>
                    <a href='https://github.com/nohahjeong' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color='white' />
                    </a>
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