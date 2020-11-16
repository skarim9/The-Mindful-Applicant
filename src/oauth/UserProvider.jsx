import { auth,generateUserDocument} from "../firebase-db/config";
// code from https://blog.logrocket.com/user-authentication-firebase-react-apps/
import React, { Component, createContext } from "react";


export const UserContext = createContext({ user: null });

export default class UserProvider extends Component {
  state = {
    user: null
  };

  
  
  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });


  };

  render() {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
