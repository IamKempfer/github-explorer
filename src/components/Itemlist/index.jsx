import { Container } from './styles'

export function Itemlist ({repo}) {
    return (
        
         <Container >
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <a href={repo.html_url}>Acessar repositório</a>
            </Container>       
       
    )
}

