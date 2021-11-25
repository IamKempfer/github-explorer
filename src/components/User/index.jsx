import { Container } from './styles'

export function User() {
    return (
        <Container>
        <img src='https://github.com/IamKempfer.png' alt="Victor Kemfper" />
        <h1>Victor Kempfer</h1>
        <h2>IamKempfer</h2>
        <p>Bio do usúario</p>
        <section>
            <div>
                <strong>12</strong>
                <span>Repositorio</span>
            </div>

            <div>
                <strong>21</strong>
                <span>Seguidores</span>
            </div>

            <div>
                <strong>21</strong>
                <span>Seguindo</span>
            </div>
        </section>
        </Container>
    )
}