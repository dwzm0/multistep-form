import styled from 'styled-components'

export const PanelContainer = styled.div`
  display: flex;
  padding: 20px;
  margin: 0px auto;                         
  border-radius: 1rem;
  box-shadow: rgba(2, 41, 90, 0.05) 0px 8px 24px 24px;


  @media screen and (max-width: 770px) {
    flex-direction: column;
    background-color: var(--alabaster);

    padding: 0px;
    width: 100%;
  }
`
