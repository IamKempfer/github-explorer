import styled from 'styled-components'

export const Container = styled.main`
width: 100%;
background-color: var(--shape);
border-radius: 10px;
border-bottom:10px solid #56a2f9;

div{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding:1rem;


    button{
        position: absolute;
        left: 1rem;
        display: flex;
        align-items: center;
        background: var(--shape-light);
        color: var(--text-secondary);
        padding: 0.3rem .5rem;
        border-radius: 8px;
        transition: filter 0.3s ease;

        &:hover{
            filter: brightness(80&);
        }
    }

    h1{
        font-size: 1.5rem;
        color: var(--text);
    }
}

ul{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;

    li{
        width: 100%;
        background-color: var(--shape-light);
        border-radius: 5px;
        padding: .8rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
    }

    h2{
        font-size: 1.1rem;
        color: var(--text);
    }

    p{
        color: var(--text-secondary);
    }

    a{
        color: #56a2f9;
    }

}


`