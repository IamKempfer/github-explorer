import { FiArrowLeft } from 'react-icons/fi'
import { Container } from './styles'
import { Itemlist } from '../Itemlist'


export function ReposList({user, userRepos, setIsReposListActive }) {

    return(
        <Container>
        <div>
        <button type="button" onClick={() => setIsReposListActive(false)} >
            <FiArrowLeft />
            Voltar
        </button>
        <h1>Repositório de {user.name}</h1>
        </div>

        <ul>
            {userRepos.map(repo =>(
                <Itemlist key={repo.id} repo={repo}/>   
            ))} 
        </ul>
        
        
        </Container>
    )
}