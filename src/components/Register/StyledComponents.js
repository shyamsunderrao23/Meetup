import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`

export const RegisterLogoImage = styled.img`
  width: 35%;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`

export const RegisterHeading = styled.h1`
  font-family: 'roboto';
  font-weight: 500;
  color: #334155;
  font-size: 50px;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-family: 'roboto';
  font-size: 14px;
  color: #7b8794;
  font-weight: 500;
  margin-bottom: 10px;
`
export const Input = styled.input`
  background-color: transparent;
  border: 2px solid #cbd5e1;
  padding: 10px;
  color: #334155;
  font-family: 'Roboto';
  outline: none;
  width: 275px;
  border-radius: 3px;
  margin-bottom: 30px;
`

export const Selector = styled.select`
  padding: 10px;
`

export const Options = styled.option`
  margin: 5px;
`

export const RegisterNowBtn = styled.button`
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  font-weight: 600;
  color: #fff;
  border-radius: 7px;
  padding: 12px;
  align-self: flex-start;
  margin-top: 40px;
  width: 130px;
`
