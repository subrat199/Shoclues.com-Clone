import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Admin = () => {
    const [Formstate,setFormState]=useState({
        name:"",
        image:"",
        price:"",
        rating:""
    })
    const handleChange=(e)=>{
        setFormState({...Formstate, [e.target.name]:e.target.value })
    }
    const handleSubmit=(e)=>{
      axios({
        method:'post',
        url:` http://localhost:8080/products`,
        data:{
          name:Formstate.name,
          image:Formstate.image,
          price:Formstate.price,
          rating:Formstate.rating
        }
      })
    }
    const styles={
      border:"1px solid black",
      width:'200px',
      marginTop:'10px'
    }
    console.log(Formstate)
    
    const {name,price,image,rating}=Formstate
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <input type="text" name='name' value={name} onChange={handleChange} style={styles} placeholder='product name'/> <br />
                <input type="text" name='image' value={image} onChange={handleChange} style={styles} placeholder='product image'/> <br />
                <input type="number" name='price' value={price} onChange={handleChange} style={styles} placeholder='product price'/>  <br />
                <input type="number" name='rating' value={rating} onChange={handleChange} style={styles} placeholder='product rating'/>  <br />
                <input type='submit' style={styles}/>
        </form>
    </div>
  )
}

export default Admin