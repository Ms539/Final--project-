import React,{useState} from 'react'
import {Button,Form,Col,Spinner} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { registerNewClient } from './../actions/clientAction';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loading,errors} = useSelector((state) => state.client)
    const [registerInput,setRegisterInput] = useState({})
    const handleChange = (e) =>{
        setRegisterInput({...registerInput, [e.target.name]:e.target.value});
    };
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(registerNewClient(registerInput,navigate))
    }
  return (
    <div style={{ display:'flex', justifyContent: 'center',backgroundImage:"url('https://images.unsplash.com/photo-1595236629937-aadaf7c1d99d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:'100%'}}>
        <Col xs={7} >
         <Form>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'15px',marginTop:'16px'}}><strong> First Name</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="text" name='firstNameClient' onChange={handleChange} placeholder="Enter firstname" />
      </Form.Group>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'15px',marginTop:'10px'}}><strong>Last Name</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="text" name='lastNameClient' onChange={handleChange} placeholder="Enter lastname" />
      </Form.Group>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'15px',marginTop:'10px'}}><strong>Telephone</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="text" name='telephone' onChange={handleChange} placeholder="Enter number phone" />
      </Form.Group>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'15px',marginTop:'10px'}}><strong>Adress</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="email" name='adress' onChange={handleChange} placeholder="Enter Adress " />
      </Form.Group>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'15px',marginTop:'10px'}}><strong>Email address</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="email" name='email' onChange={handleChange} placeholder="Enter email" />
      </Form.Group>
      <Form.Group style={{height:'50px'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize:'15px',marginTop:'10px'}}><strong>Password</strong></Form.Label>
        <Form.Control style={{fontSize:'15px',marginTop:'-8px'}} type="password" name='password' onChange={handleChange} placeholder="at least 6 characters: lowercase, uppercase, numbers" />
      </Form.Group>
      {errors && errors.map((el) => <p>{el.msg}</p>)}
      <Button style={{marginTop:'20px',backgroundColor:'black',borderColor:'green',color:'green',borderStyle:'groove',marginBottom:'21px'}} type="submit" onClick={handleSubmit}>
        {loading ? (<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
        </Spinner>) :(<strong>submit</strong>)
        }
        
      </Button>
    </Form>
    </Col>
    </div>
  )
}

export default Register