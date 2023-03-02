import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { logoutAction } from './../actions/clientAction';
const Navigbar = () => {


  const {isAuth,clientInfo} = useSelector ( (state )=> state.client);
  const dispatch = useDispatch()

  return (
    <div>
         <Navbar className='new'>
        
          <Navbar.Brand>
            <p className='navtm'>Sousse Gear</p>
          </Navbar.Brand> 
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB19dfAf7RkC2r_fL0nlvSWeadwC7C5YGzxlmAeMUJDsCLrzDxQlvexfmK9Urt7rfrqQg&usqp=CAU"
            width="100"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Nav className="navbar" style={{marginLeft:'15px'}}>
           <Link className="nav" to='/'>Welcome</Link>
           <Link className="nav" to='/about'>About</Link>
           <Link className="nav" to='/product'>Products</Link>
           <Link className="nav" to='/projectref'>Our project</Link>
           <Link className="nav" to='/contactus'>Contact</Link>           
           
           {isAuth ? ( 
            <>
            
            <h6>{clientInfo.firstNameClient}</h6>
           <span className="navf"
           style={{cursor:'pointer'}} 
           onClick={()=> dispatch (logoutAction())}><i class="fa-solid fa-right-from-bracket" style={{cursor:'pointer'}}></i></span>
           <Link to='/ProfileAdmin'>COMMANDES</Link> 

            </>
           ) : ( 
           <>
            <Link className="navf" to='/register'><i class="fa-solid fa-user-plus" style={{cursor:'pointer'}}></i></Link>
            <Link className="navf" to='/login'><i class="fa-solid fa-right-to-bracket" style={{cursor:'pointer'}}></i></Link> 
           </>
            
            )}
           
          </Nav>
        
      </Navbar> 
        
    </div>
  )
}

export default Navigbar