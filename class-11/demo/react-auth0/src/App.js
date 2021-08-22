import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'

class App extends React.Component {
  render() {
    return (
      <div>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
      </div>
    )
  }
}

export default App
