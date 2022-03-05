import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-bertween;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    button {
        border-radius: 0 0 20px 20px;
    }

    img {
        max-height: 250px;
        object-fit cover;
        object-position: top;
        border-radius: 20px 20px 0 0;
    }

    div {
        padding: 2rem;
        height: 100%;
    }
`