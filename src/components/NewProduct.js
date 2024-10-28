import React, { useState } from 'react'
import './NewProduct.css'
const ProductForm = (props) => {
    const [newTitle, setTitle] = useState('');
    const [newdate, setDate] = useState('');

    
    function titleonChangeHnadler(event) {
        setTitle(event.target.value);
    }

    function dateonChangeHnadler(event){
        setDate(event.target.value)
        // console.log("Printing...");
        // console.log(title);
        // console.log(date);
    }

    function submitHandler(event){
        event.preventDefault();
        const proData = {
            title:newTitle,
            date:newdate
        }

        // console.log(obj)
        props.x(proData);
        setDate('');
        setTitle('');
    }
        

  return (
    <form onSubmit={submitHandler}>
      <div className='new-product_title'>
        <label>Title</label>
        <input type='text' value={newTitle} onChange={titleonChangeHnadler}></input>
      </div>
      <div className='new-product_date'>
        <label>Date</label>
        <input type='date' min='2023-01-01' value={newdate} max='2028-12-12' onChange={dateonChangeHnadler}></input>
      </div>
      <div className='new-product_button'>
        <button type='submit'>Add Product</button>
      </div>
    </form>
  )
}

export default ProductForm
