import photo from '../../assets/photo.jpg'
import { BioContainer, Row, BioText } from './styled'

const Bio = () => {
    return (
        <BioContainer id='bio'>
            <Row>
                <img src={photo} alt='profilePhoto' class='photo' />

                <BioText>
                    <h1>Sobre mim</h1>
                    <p>Meu nome é Noh Ah tenho 28 anos, nasci na Coréia do Sul e vim ao Brasil com 7 anos de idade.Sou formado em Farmácia-Bioquímica na USP e estou tentando iniciar minha carreira como desenvolvedor web. Fiz 6 meses de curso intensivo na Labenu, onde desenvolvi projetos individuais e em grupo.</p>
                    <p>ReactJS | NodeJS | HTML | CSS | JavaScript | TypeScript | MySQL | Git</p>
                </BioText>
            </Row>
        </BioContainer>
    )
}

export default Bio