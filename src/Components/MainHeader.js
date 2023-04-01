import React from 'react'
import { Container } from 'react-bootstrap';
import '../Components/MainHeader.css';
const MainHeader = () => {
  return (
    <Container className="container">
        <div className='header'>
          <h1>Welcome</h1>
        </div>
    </Container>
  )
}

export default MainHeader;