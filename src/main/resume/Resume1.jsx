
import React from 'react';
import styled from 'styled-components';
import './Resume.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   height: 58vh;
  background: linear-gradient(90deg, #16a0e0ff, #c40fa9ff); /* Blue to Purple gradient */
  color: white;
  text-align: center;
  border-radius: 16px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color:white;
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  border-color: white;
  color: #1e3c72;
  transition: background-color 0.3s;
  gap:2px;

  &:hover {
    background-color: #e7dde5ff;
  }
`;

const App = () => {
  return (
    <Container>
      <Heading>Ready to Work Together?</Heading>
      <Subheading>
        Let's create something amazing together. Whether it's a new project or collaboration, I'm always excited to discuss new opportunities.
      </Subheading>
      <div>
        <Button id='first'>Get In Touch</Button>
        <Button id='second'>View My Work</Button>
      </div>
    </Container>
  );
};

export default App;
