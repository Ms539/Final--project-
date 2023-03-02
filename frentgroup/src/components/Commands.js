import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCommands,addCommand,updateCommand,deleteCommandAction } from './../actions/commandAction';
import {Table,Modal,Button} from 'react-bootstrap';


const Commands = () => {
  const dispatch = useDispatch();
// getallcommand
  const commands = useSelector( state=>state.commandList.commands)
  useEffect(()=>{
    dispatch(listCommands())
  },[])
//postnewcommand
const[createcmd,setCreatecmd]=useState({
  fulltNameClient:'',adress:'',phone:'',commandDescription:'',amount:'',
  advancePayment:'',leftToPay:'',dateToTakeOrder:'',deleveryDate:''
})
    const[id,setId]=useState('')
    const[fulltNameClient,setFulltNameClient]=useState('')
    const[adress,setAdress]=useState('')
    const[phone,setPhone]=useState('')
    const[commandDescription,setCommandDescription]=useState('')
    const[amount,setAmount]=useState('')
    const[advancePayment,setAdvancePayment]=useState('')
    const[leftToPay,setLeftToPay]=useState('')
    const[dateToTakeOrder,setDateToTakeOrder]=useState('')
    const[deleveryDate,setDeleveryDate]=useState('')
    const handelChange = (e)=>{
      setCreatecmd({...createcmd, [e.target.name]:e.target.value})
    }
const addingCommand= async ()=>{
        /* const data={
            fulltNameClient, adress, phone, commandDescription, amount, advancePayment,
            leftToPay, dateToTakeOrder, deleveryDate } */
        await dispatch(addCommand(createcmd))
        await dispatch(listCommands())
        handleClose()
    }
// editCommand
const [edit, setEdit] = useState(false);
  const handleCloseEdit = () => setEdit(false);
  const handleShowEdit = ( _id ) => {
    commands.forEach(command =>{
      if (command._id === _id){
        setId(command._id)
        setFulltNameClient(command.fulltNameClient)
        setAdress(command.adress)
        setPhone(command.phone)
        setCommandDescription(command.commandDescription)
        setAmount(command.amount)
        setAdvancePayment(command.advancePayment)
        setLeftToPay(command.leftToPay)
        setDateToTakeOrder(command.dateToTakeOrder)
        setDeleveryDate(command.deleveryDate)
      }
    })
    console.log(_id)
    
    setEdit(true);
  }

    const updatingCommand = async ()=>{
      const data={
        fulltNameClient, adress, phone, commandDescription, amount, advancePayment,
        leftToPay, dateToTakeOrder, deleveryDate }
      
     await dispatch(updateCommand(id,data))
     await dispatch(listCommands())

      setFulltNameClient('')
      setAdress('')
      setPhone('')
      setCommandDescription('')
      setAmount('')
      setAdvancePayment('')
      setLeftToPay('')
      setDateToTakeOrder('')
      setDeleveryDate('')
      setId('')
      handleCloseEdit()

  } 
    
  // deleteproduct
const deleteCommand= async(_id)=>{
  console.log(_id)
  await dispatch(deleteCommandAction(_id))
  await dispatch(listCommands())
  }
// show&hide modal
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true); 

  return (
    
    <div style={{backgroundImage:"url('https://static.vecteezy.com/ti/vecteur-libre/t2/2309792-fond-vagues-blanches-gratuit-vectoriel.jpg')",backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:'550px'}}>
      {/* postnewcommand */}
      <div  >
        <br/>
      <Button style={{marginBottom:'10px',marginTop:'5px',marginLeft:'35px',marginTop:'15px',color:'red',backgroundColor:'white',borderColor:'red',borderStyle:'groove'}} onClick={handleShow}><strong>ajouter commande</strong></Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton/>
          <Modal.Body>
         <form style={{marginBlock:"20px"}} className="modaladd">
                <label> First Name %Last name </label>
                <input name='fulltNameClient' type='text' /* value={fulltNameClient} */ onChange={ handelChange}/>
                <label>Adress</label>
                <input name='adress' type='text' /* value={adress} */ onChange={ handelChange }/>
                <label>Phone</label>
                <input name='phone' type='text' /* value={phone} */ onChange={ handelChange}/>
                <label>Description</label>
                <input name='commandDescription' /* value={commandDescription} */ onChange={ handelChange}/>
                <label>Amount</label>
                <input name='amount'  type='text' /* value={amount} */ onChange={ handelChange}/>
                <label>Advance</label>
                <input name='advancePayment'  type='text' /* value={advancePayment} */ onChange={ handelChange}/>
                <label>Left to pay </label>
                <input name='leftToPay'  type='text' /* value={leftToPay} */ onChange={ handelChange }/>
                <label>Date to take order</label>
                <input name='dateToTakeOrder'  type='text' /* value={dateToTakeOrder} */ onChange={ handelChange}/>
                <label>Delivery date</label>
                <input name='deleveryDate'  type='text' /* value={deleveryDate} */ onChange={ handelChange}/>
            </form>
            </Modal.Body>    
   <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" type="submit" onClick={addingCommand} >Add</Button>{' '}
        </Modal.Footer>
      </Modal>

         

      </div>
      {/* getcommand */}
        <div style={{marginBlock:'20px'}}> 
       
           <Table striped bordered hover style={{ border:'groove'}}>
            <thead>
      <tr style={{textAlign:'center'}}>
       <th>Last name & First Name</th>
       <th>Address</th>
       <th>Phone</th>
       <th>Description</th>
       <th>Quantity</th>
       <th>Advance</th>
       <th>Rest to be paid</th>
       <th>Date to take the order</th>
       <th>Delivery date</th>
       </tr>      
            </thead>
         <tbody> 
          {commands.map( (command) => (
          <tr>
         <td>{command.fulltNameClient}</td>
         <td>{command.adress}</td>
         <td>{command.phone}</td>
         <td>{command.commandDescription}</td>
         <td>{command.amount}</td>
         <td>{command.advancePayment}</td>
         <td>{command.leftToPay}</td>
         <td>{command.dateToTakeOrder}</td>
         <td>{command.deleveryDate}</td>
          <td><i class="fa-solid fa-pen-to-square"  onClick={()=>handleShowEdit(command._id)} style={{cursor:'pointer'}}></i></td>
          <td><i class="fa-solid fa-trash" onClick={()=> deleteCommand(command._id)}   style={{cursor:'pointer'}}></i></td>
        </tr> )
    
     ) }
       </tbody>       
      </Table>
     </div>
       {/*updateproduct  */}
       <Modal show={edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton/>
          <Modal.Body>
          <form style={{marginBlock:"20px"}} className="modaladd">
                <label>Last name First Name</label>
                <input type='text' value={fulltNameClient} onChange={ (e)=>setFulltNameClient((e.target.value)) }/>
                <label>Adress</label>
                <input type='text' value={adress} onChange={ (e)=>setAdress((e.target.value)) }/>
                <label>Phone</label>
                <input type='text' value={phone} onChange={ (e)=>setPhone((e.target.value)) }/>
                <label>Description</label>
                <input type='text' value={commandDescription} onChange={ (e)=>setCommandDescription((e.target.value)) }/>
                <label>Quantity</label>
                <input type='text' value={amount} onChange={ (e)=>setAmount((e.target.value)) }/>
                <label>Advance</label>
                <input type='text' value={advancePayment} onChange={ (e)=>setAdvancePayment((e.target.value)) }/>
                <label>Rest to be paid</label>
                <input type='text' value={leftToPay} onChange={ (e)=>setLeftToPay((e.target.value)) }/>
                <label>Date of order</label>
                <input type='text' value={dateToTakeOrder} onChange={ (e)=>setDateToTakeOrder((e.target.value)) }/>
                <label>Delivery date</label>
                <input type='text' value={deleveryDate} onChange={ (e)=>setDeleveryDate((e.target.value)) }/>
            </form>
   </Modal.Body>    
   <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={updatingCommand}>
          Save
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default Commands