import {Component} from 'react'
import Cookies from 'js-cookie'
import {StyledButton} from '../StyledComponents/index'
import './index.css'

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
    showErrorMsg: false,
    errorMsg: '',
    name: '',
    topic: 'ARTS_AND_CULTURE',
  }

  formSubmitted = event => {
    const {history} = this.props
    event.preventDefault()
    const {name, topic} = this.state
    console.log(this.state)
    if (!name) {
      this.setState({showErrorMsg: true, errorMsg: 'Please enter your name'})
    } else {
      Cookies.set('registeredName', name, {expires: 15})
      Cookies.set('registeredTopic', topic, {expires: 15})
      history.push('/')
    }
  }

  topicChanged = event => {
    console.log(event.target.value)
    this.setState({topic: event.target.value})
  }

  nameChanged = event => {
    console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  render() {
    const {name, topic, errorMsg, showErrorMsg} = this.state
    return (
      <div className="main-register-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
          alt="website register"
          className="register-image"
        />
        <div>
          <h1>Let Us Join</h1>
          <form className="form-container" onSubmit={this.formSubmitted}>
            <label className="for-margin" htmlFor="name">
              NAME
            </label>
            <input
              onChange={this.nameChanged}
              value={name}
              type="text"
              id="name"
              placeholder="Name"
            />
            <label className="for-margin" htmlFor="tag">
              TOPICS
            </label>
            <select value={topic} id="topic" onChange={this.topicChanged}>
              {topicsList.map(eachTopic => (
                <option key={eachTopic.id} value={eachTopic.displayText}>
                  {eachTopic.displayText}
                </option>
              ))}
            </select>
            <StyledButton className="for-margin" type="submit">
              Register Now
            </StyledButton>
            {showErrorMsg && <p>{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Register
