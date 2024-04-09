  import React, { Component } from 'react'
  import { Container } from 'react-bootstrap'

  export default class Footer extends Component {
    render() {
      return (
          <footer className="footer mt-auto pt-3">
          <Container 
            className="text-center"
            fluid
            style={{
              backgroundColor: '#FFFFFF',
              border: 'solid',
              color: '#000000',
              height: '60px',
              position: 'relative',
              marginTop: '100px',
              padding: '10px',
            }}
          >
          <p>&copy; ALVA KOHVIK 2024. KÕIK ÕIGUSED KAITSTUD.</p>
          </Container>
      </footer>
      )
    }
  }
  