import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>Sign Up</h1>
    <form>
      <label for="user-id">User ID:</label>
      <input type="text" id="user-id" name="user-id" required/><br></br>
      <label for="first-name">First Name:</label>
      <input type="text" id="first-name" name="first-name" required/>
      <label for="last-name">Last Name:</label>
      <input type="text" id="last-name" name="last-name" required/><br></br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/><br></br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required/><br></br>
      <label for="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" required/><br></br>
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob" required/><br></br>
      <label for="gender">Gender:</label>
      <select id="gender" name="gender">
        <option value="">--Please select your gender--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select><br></br>
      <label for="hometown">Hometown:</label>
      <input type="text" id="hometown" name="hometown" required/><br></br>
      <input type="submit" value="Sign Up"/><br></br>
    </form>
    <p>Already have an account? <a href="#">Sign in</a></p>
    </div>
  )
}

export default Signup