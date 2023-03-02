import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button,Form } from 'react-bootstrap';

const ContactUs = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xt2upmc', 'template_rvvm2lo', form.current, 'y-kkaioRAMCokUiY3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return(
        <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1463130456064-77fda7f96d6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:'490px'}}>       
            <Form className="form ff" ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3 " >
        <br/>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="Name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="text" name="Phone" placeholder="Enter your number" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="Email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Quote request</Form.Label> 
        <Form.Control as="textarea" rows={3} name="message" placeholder="Put the name of the item you have chosen with the description (choice of material, choice of color, size)"/>
      </Form.Group>
      <Button style={{color:'green',backgroundColor:'white',borderColor:'green',borderStyle:'groove' ,marginTop:'-11px'}}  type="submit" >
        <strong>
        Send
        </strong>
        </Button>
    </Form> 
        </div>
    )
}
export default ContactUs