
import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Homepage, Account, SignIn, SignUp, LogOut, About, Landing } from '../views/pages/'

const App = () => (
  <div>
    <header>
      <Link to="/trending">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/account">My Account</Link>
    </header>

    <main>
      <Route exact path="/" component={Landing} />
      <Route exact path="/trending" component={Homepage} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/exit" component={LogOut} />
    </main>
  </div>
)

export default App