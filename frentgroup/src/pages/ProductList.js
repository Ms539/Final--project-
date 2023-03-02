import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Button, Card, Modal} from 'react-bootstrap';
import {listProducts,updateProduct,deleteProductAction} from '../actions/productAction';
import AddProduct from '../components/AddProduct';
// productlist
const ProductList = () => {
const dispatch=useDispatch()

const productList = useSelector((state)=> state.productList)
const isAuth = useSelector((state)=>state.client.isAuth)
console.log(isAuth)
const { loading, error, products } = productList
useEffect(()=>{
  dispatch(listProducts())
 
},[dispatch])
// updateproduct
    const [id,setId]=useState('');
    const [image, setImage]=useState('');
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');

  const [edit, setEdit] = useState(false);
  const handleCloseEdit = () => setEdit(false);
  const handleShowEdit = ( _id ) => {
    products.forEach(product =>{
      if (product._id === _id){
        setId(product._id)
        setImage(product.image)
        setTitle(product.title)
        setDescription(product.description)
      }
    })
    console.log(_id)
    
    setEdit(true);
  }

// updateproduct
const updatingProduct= async ()=>{
  const data={
    image,
    title,
    description
  }
  
 await dispatch(updateProduct(id,data))
  await dispatch(listProducts())
  handleCloseEdit()
  setImage('')
  setTitle('')
  setDescription('')
  setId('')
}
// deleteproduct
const deleteProduct= async(_id)=>{
console.log(_id)
await dispatch(deleteProductAction(_id))
await dispatch(listProducts())
}



  return (
    <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1589782182965-c6512208e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFlc3RoZXRpYyUyMGRlc2t0b3AlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:'100%'}}>                                            
      {/* productlist */}
      {loading ? (
      <h2>loading...</h2>
      ) : error ? (
      <h3>{error}</h3>
      ) : ( 
        <>
        {isAuth ? <AddProduct/> : null }
                        
<div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
    {products.map((product)=>(
      <div style={{marginBottom:'60px',justifyContent:"space-around"}}>
        <br/>
      <Card className='cc' style={{maxWidth:'230px',marginLeft:'25px',height:'380px'}} >
        {isAuth ? <tr style={{display:'flex' ,justifyContent:'space-between', padding:'1px 5px'}}>
          
          <td><i class="fa-solid fa-pen-to-square" onClick={()=>handleShowEdit(product._id)} style={{cursor:'pointer'}}></i></td>
          <td><i class="fa-solid fa-trash" onClick={()=> deleteProduct(product._id)} style={{cursor:'pointer'}}></i></td>
        </tr>
        : null}
        
        <Card.Img className="Poster" variant="top" src={product.image} alt={product.title} />
        <Card.Body className="productcat">
          <Card.Title style={{color:'rgb(28,27,27)',fontSize:'18px',textAlign:'center' , fontFamily:'oblique' }}> {product.title} </Card.Title>
          <Card.Text className="productinfo"> {product.description} </Card.Text>
        </Card.Body>
      </Card>
      </div>
    ))} 
    
</div>
<br/><br/><br/><br/>
 
   
</>
     )} 

   {/*updateproduct  */}

      <Modal show={edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton/>
          <Modal.Body>
              <form className="modaladd" style={{borderColor:'black'}}>

                <label>image</label>
                <input type='text' value={image} onChange={ (e)=>(setImage(e.target.value)) }/>
                <label className='title'>title</label>
                <input type='text' value={title} onChange={ (e)=>(setTitle(e.target.value)) }/>
                <label className='desc'>description</label>
                <input type='text' value={description} onChange={ (e)=>(setDescription(e.target.value)) }/>
            </form>
   </Modal.Body>    
   <Modal.Footer>
          <Button style={{color:'white',backgroundColor:'black',borderColor:'white',borderStyle:'groove'}} type="submit" onClick={updatingProduct}>
            <strong>
          Save
            </strong>
          </Button>
        </Modal.Footer>
      </Modal>

      
     </div>

  )
}

export default ProductList