import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WelcomeHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 50px;
  color: #334155;
  margin-bottom: 0px;
`

export const RegisterDescription = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 23px;
  color: #475569;
  margin-bottom: 20px;
`

export const RegisterBtn = styled.button`
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  color: #fff;
  font-weight: 500;
  padding: 10px;
  width: 100px;
  border-radius: 7px;
  margin-bottom: 20px;
  cursor: pointer;
`

export const MeetupImg = styled.img`
  width: 50%;
`
