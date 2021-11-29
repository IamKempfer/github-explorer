
import { useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { toast, ToastContainer } from 'react-toastify'
import { Container } from './styles'

export function SearchBar({ setUser, setUserRepos }) { 
    const inputRef = useRef()


    function getUserData(e) {
        e.preventDefault()
    
        try{
         fetch(`https://api.github.com/users/${inputRef.current.value}`)
         .then(response => response.json())
         .then(data => {
             if (data.message === 'Not Found') {
                setUser(null)
                setUserRepos(null)
                toast.error('Usuário não encrontrado', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                    });
             } else {
                 setUser(data)
                 fetch(
                    `https://api.github.com/users/${inputRef.current.value}/repos`
                    )
                .then(response => response.json())
                .then(data => setUserRepos(data))  
             }
         })
    } catch (error) {
        console.log(error)
    }
}
         
        
    

    return (
        <Container>
          <h1>Github Explorer</h1>

          <form onSubmit={getUserData}>
              <div>
                  <span>github.com/</span>
                  <input type="text" ref={inputRef} />
              </div>
              
              <button type='submit'>
                  <FiSearch />
              </button>
          </form>
          <ToastContainer />    
        </Container>
    );
    }