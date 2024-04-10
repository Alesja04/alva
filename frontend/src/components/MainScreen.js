import React from 'react';
import { Button, Container} from 'react-bootstrap';
// import background from '../assets/main.png';

export default function MainScreen({menuRef}) {
  return (
    <Container style={{ height: 'auto', }}>

   
      <img src="./img/main.png" class="img-fluid mw-100" alt="main"></img>
        

        <Button className="d-grid gap-2 col-6 mx-auto btn-outline-light" onClick={menuRef} style={{backgroundColor: 'rgb(255,255,255,0)', position:'relative'}}>Vata menüüd</Button>
 
     
     </Container>
    
  )
}
