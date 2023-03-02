import React from 'react'
import { Card} from 'react-bootstrap';

const Footer = () => {
  return (
     <div style={{marginTop:'100px'}}>
    <div  style = {{backgroundColor: 'black' ,position:'fixed',bottom:'0',width:'100%',height:'19%'}}>
     
    <Card.Footer style={{padding:'0%'}}>
    <td>
      <Card  style={{ width: '22rem',backgroundColor: 'black',color:'white' }}>
      <Card.Body>
        <Card.Title style={{fontSize:'30px'}}>Sousse Gear</Card.Title>
        <Card.Text style={{fontSize:'10px'}}>
          <p>Sousse Gear is a lifestyle clothing brand headquartered in Tunis, TN. From start to finish, each product is designed with our customers and quality in mind.</p>
        </Card.Text>
      </Card.Body>
      </Card></td>
     
      <td>
      <Card  style={{ width: '30rem',backgroundColor: 'black',color:'white'}}>
      <Card.Body>
        <Card.Title style={{fontSize:'15px',}}>CONTACT</Card.Title>
        <Card.Text style={{fontSize:'10px'}}>
          <p>Adress:  Sousse 4000 </p>
          <p>Mobile: 00000000</p>
          <p>Email:mamounsahli539@gmail.com</p>
        </Card.Text>
      </Card.Body>
    </Card></td>
    </Card.Footer>
   </div>
    </div>
  )
}

export default Footer