import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: hsl(0, 0%, 100%);
  max-width: 945px;
/*   max-height: 600px;  */
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  border-radius: 1rem;

  @media screen and (max-width: 770px) {
    flex-direction: column;
    max-width: 375px;
    min-height: 730px;
    max-height: 1000px;
    overflow: hidden;
    border-radius: 0px;
    position: relative;
    background-color: hsl(229, 24%, 87%);
  }

`
