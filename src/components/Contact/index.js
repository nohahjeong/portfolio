import { ContactContainer, SocialContainer, TextContainer } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <ContactContainer>
            <TextContainer>
                <h1>Contrate-me!</h1>
                <p>
                    Procuro oportunidade de trabalho onde eu possa aprender,<br />
                    me desenvolver e evoluir na minha carreia profissional.
                </p>
                <p>
                    E-mail: noh_ah@hotmail.com<br/>
                    Celular: (11) 97674-1251
                </p>
                <SocialContainer>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <FontAwesomeIcon icon={faGithub} />
                </SocialContainer>
            </TextContainer>
        </ContactContainer>
    )
}

export default Contact