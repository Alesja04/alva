import React from 'react';
import { Button, Container} from 'react-bootstrap';
// import background from '../assets/main.png';

export default function MainScreen({menuRef}) {
  return (
    <Container style={{ height: 'auto', }}>

    {<div style={{ width: '100%' }}>
      <img src="./img/main.png" class="img-fluid" alt="main">
        </img>

        <Button className="d-grid gap-2 col-6 mx-auto btn-outline-light" onClick={menuRef} style={{backgroundColor: 'rgb(255,255,255,0)', position:'relative'}}>Vata menüüd</Button>
        </div>}
     
     </Container>
    
  )
}
