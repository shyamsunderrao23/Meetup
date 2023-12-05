// import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'

import {
  MainContainer,
  WelcomeHeading,
  RegisterDescription,
  RegisterBtn,
  MeetupImg,
} from './StyledComponents'

const Home = props => {
  const {newList} = props
  const {userName} = newList
  return (
    <>
      <Header />
      <MainContainer>
        <WelcomeHeading>Welcome to {userName}</WelcomeHeading>
        <RegisterDescription>Please register for the topic</RegisterDescription>
        <Link to="/register">
          <RegisterBtn data-testid="button">Register</RegisterBtn>
        </Link>
        <MeetupImg
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </MainContainer>
    </>
  )
}

export default Home
