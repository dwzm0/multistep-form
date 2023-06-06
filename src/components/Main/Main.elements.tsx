import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: hsl(0, 0%, 100%);
  max-width: 935px;
  max-height: 600px; 
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  border-radius: 1rem;

  @media screen and (max-width: 770px) {
    flex-direction: column;
    max-width: 375px;
    max-height: 667px;
    overflow: hidden;
    border-radius: 0px;
    position: absolute;
    background-color: hsl(229, 24%, 87%);
  }

`
