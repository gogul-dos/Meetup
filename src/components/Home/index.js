import Cookies from 'js-cookie'
import Header from '../Header'
import {StyledButton, StyledText, StyledComponent} from '../StyledComponents'

const Home = props => {
  const {history} = props
  const name = Cookies.get('registeredName')
  const topic = Cookies.get('registeredTopic')

  const registerClicked = () => {
    history.push('/register')
  }

  console.log(name, topic)
  if (name !== undefined) {
    return (
      <>
        <Header />
        <StyledComponent>
          <StyledText>Welcome {name}</StyledText>
          <p>Welcome to {topic}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
            alt="meetup"
            className="meetup-image"
          />
        </StyledComponent>
      </>
    )
  }
  return (
    <div>
      <Header />
      <StyledComponent>
        <h1>Welcome to meetup</h1>
        <p>Please register for the topic</p>
        <StyledButton onClick={registerClicked}>Register</StyledButton>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
          alt="meetup"
          className="meetup-image"
        />
      </StyledComponent>
    </div>
  )
}

export default Home
