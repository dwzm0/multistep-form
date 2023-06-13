import styled from 'styled-components'

export const ContactForm = styled.form`
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
interface InputProps {
  readonly redBorder: boolean
}

export const ContactInput = styled.input<InputProps>`
  font-size: 16px;
  color: hsl(213, 96%, 18%);
  font-weight: 700;
  padding: 14px 20px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid;
  border-color: ${({ redBorder }) => (redBorder ? 'hsl(354, 84%, 57%)' : 'hsl(231, 11%, 63%)')};

  &:hover {
    border-color: hsl(243, 100%, 62%);
    cursor: pointer;
  }
  
  &::placeholder {
    color: var(--light-gray);
  }

  @media screen and (max-width: 770px) {
    padding: 10px 20px;
  }
`
export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const LabelError = styled.p`
  font-size: 14px;
  display: block;
  font-weight: 700;
  color: var(--strawberry-red);
  padding-top: 15px;
  padding-bottom: 5px;
`
export const ContactFormLabel = styled.label`
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
