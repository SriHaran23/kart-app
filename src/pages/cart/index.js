import React, { useEffect, useState } from 'react'

const CartDetails = () => {
    const [cart,setCart]=useState()

    useEffect(() => {
        fetch("http://localhost:4000/cart")
            .then(res => res.json())
            .then(data => setCart(data));
    }, [])

    function deleteFromCart(id) {
        fetch(`http://localhost:4000/cart/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                if (response.ok) {
                    console.log(`Item with id ${id} deleted successfully.`);
                } else {
                    console.error("Failed to delete the item.");
                }
            })
            .catch(error => console.error("Error:", error));
    }
useEffect(()=>{
    console.log(cart);
    
},[cart])
    return (
        <div className='container h-100 py-3'>
        <div className='row justify-content-around h-100'>
            <div className='col-7 custom-card h-100'>
                {cart?.map((el,i)=>{
                    return <div key={i} className=''>
                        <h5>{el?.Model}</h5>
                    </div>
                })}
            </div>
            <div className='col-4  h-100'>
            <div className='custom-card h-75'></div>
            </div>
        </div>
        </div>
    )
}

export default CartDetails