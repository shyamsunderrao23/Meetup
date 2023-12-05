import {Component} from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {v4 as uuid4} from 'uuid'
import Header from '../Header'
import './index.css'

import {
  RegisterContainer,
  RegisterLogoImage,
  FormContainer,
  RegisterHeading,
  Label,
  Input,
  Selector,
  Options,
  RegisterNowBtn,
} from './StyledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    userName: '',
    showErrorMsg: false,
    // activeOptionId : topicsList[0].id,
    newList: [],
    // Error : "",
  }

  onChangeName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onSubmitRegisterForm = event => {
    event.preventDefault()
    const {userName} = this.state
    const MeetUpData = {
      id: uuid4(),
      name: userName,
    }
    this.setState(prevState => ({
      newList: [...prevState.newList, MeetUpData],
      userName,
    }))

    if (userName === '') {
      this.setState(prevState => ({
        showErrorMsg: !prevState.showErrorMsg,
      }))
    } else {
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {userName, showErrorMsg} = this.state
    const Message = 'Please enter your name'
    const ErrorMessage = showErrorMsg ? (
      <p className="err-msg">{Message}</p>
    ) : (
      ''
    )
    return (
      <>
        <Header />
        <RegisterContainer>
          <RegisterLogoImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <FormContainer onSubmit={this.onSubmitRegisterForm}>
            <RegisterHeading>Let us join</RegisterHeading>
            <Label htmlFor="label-name">NAME</Label>
            <Input
              id="label-name"
              placeholder="Your name"
              onChange={this.onChangeName}
              value={userName}
            />
            <Label htmlFor="label-select">TOPICS</Label>
            <Selector id="label-select" onChange={this.onChangeTopic}>
              {topicsList.map(eachTopic => (
                <Options key={eachTopic.id}>{eachTopic.displayText}</Options>
              ))}
            </Selector>
            <RegisterNowBtn data-testid="button" type="submit">
              Register Now
            </RegisterNowBtn>
            {ErrorMessage}
          </FormContainer>
        </RegisterContainer>
      </>
    )
  }
}
export default Register
