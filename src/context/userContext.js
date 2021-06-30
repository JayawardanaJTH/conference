import React, { Component } from "react"
import { signIn } from '../services/authServices'
import { signUp,getUsers } from '../services/userServices'

const UserContext = React.createContext();

class UserProvider extends Component {
    state = {
        users: [],
      }

    async componentDidMount() {
      // try {    
        await this.viewUsers();
      // } catch (ex) {}
    };

    userSignIn = async (data) => {
        try {
          return await signIn(data)
        } catch (ex) {
          if (ex.response)
            return ex.response
        }
    }

    userSignUp = async (data) => {
          try {
            return await signUp(data)
          } catch (ex) {
            if (ex.response)
              return ex.response
          }
      }

      viewUsers = async () => {
        try {
          const user =  await getUsers()
          this.setState({ users : user.data });
        } catch (ex) {
          if (ex.response)
            return ex.response
        }
    }
  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          userSignIn: this.userSignIn,
          userSignUp: this.userSignUp,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer, UserContext };
