import React from 'react';

function Login() {
  return(
    <div>
      <h3>Sign Up: </h3>
      <form>
        <label htmlFor="first-name">
          First Name:
          <input type="text" name="first-name" id="first-name" />
        </label>
        <label htmlFor="last-name">
          Last Name: 
          <input type="text" name="last-name" id="last-name" />
        </label>
        <label htmlFor="last-name">
          Email: 
          <input type="text" name="email" id="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="text" name="password" id="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login;