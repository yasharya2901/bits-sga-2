import { Navigate, useNavigate } from "react-router-dom"

function About() {
    const navigate = useNavigate()
  return (
    <>
      <h1>About Me</h1>
      <p>I am Yash Arya. My roll no. is 2023ebcs756. This is web page.</p>
      <br />
      <button onClick={() => navigate('/')}>Go to Home</button>
    </>
  )
}

export default About
