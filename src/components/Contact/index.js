import { ContactContainer, SocialContainer, TextContainer } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <ContactContainer id='contact'>
            <TextContainer>
                <h1>Contrate-me!</h1>
                <p>
                    Procuro oportunidade de trabalho onde eu possa aprender,<br />
                    me desenvolver e evoluir na minha carreia profissional.
                </p>
                <p>
                    E-mail: noh_ah@hotmail.com<br />
                    Celular: (11) 97674-1251
                </p>
                <SocialContainer>
                    <a href='https://www.linkedin.com/in/noh-ah-jeong/' target='_blank'>
                        <FontAwesomeIcon icon={faLinkedinIn} color='white' />
                    </a>
                    <a href='https://github.com/nohahjeong' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} color='white' />
                    </a>
                </SocialContainer>
            </TextContainer>
        </ContactContainer>
    )
}

export default Contact