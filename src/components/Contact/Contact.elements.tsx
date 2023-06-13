import styled from 'styled-components'

export const FormFirstForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 22px;
  padding-bottom: 100px;

  @media screen and (max-width: 770px) {
    padding: 0px;
  }
`
export const FormFirstInput = styled.input`
  font-size: 16px;
  color: hsl(213, 96%, 18%);
  font-weight: 700;
  padding: 14px 20px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid hsl(231, 11%, 63%);

  &:hover {
    border-color: hsl(243, 100%, 62%);
    cursor: pointer;
  }
  
  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 770px) {
    padding: 10px 20px;
  }

`
export const FormFirstLabel = styled.label`
  font-size: 14px;
  display: block;
  padding-top: 15px;
  padding-bottom: 5px;
  color: hsl(213, 96%, 18%);

  &:not(:first-child) {
    padding-top: 28px;
  }

  @media screen and (max-width: 770px) {
    &:not(:first-child) {
    padding-top: 18px;
  }
  }
`
