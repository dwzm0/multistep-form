import styled from 'styled-components'

export const PanelContainer = styled.div`
  display: flex;
  padding: 20px;
  margin: 0px auto;                         
  border-radius: 1rem;
  background-color: var(--white);


  @media screen and (max-width: 770px) {
    flex-direction: column;
    padding: 0px;
    width: 100%;
    background-color: var(--alabaster);
  }
`
