import styled from 'styled-components'

export const PanelContainer = styled.div`
  background-color: hsl(0, 0%, 100%);
  display: flex;
  padding: 20px;
  margin: 0px auto;                         
  align-items: center;
  justify-content: space-between; 
  border-radius: 1rem;
  box-shadow: rgba(2, 41, 90, 0.05) 0px 8px 24px 24px;


  @media screen and (max-width: 770px) {
    flex-direction: column;
    max-width: 375px;
    min-height: 667px;
    max-height: 761px;
    overflow: hidden;
    border-radius: 0px;
    position: absolute;
    background-color: hsl(229, 24%, 87%);
  }
`
