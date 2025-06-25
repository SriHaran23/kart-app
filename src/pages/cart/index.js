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
        <div className='container mt-4'>
        <div className='row justify-content-around'>
            <div className='col-7 custom-card'>
                {cart?.map((el,i)=>{
                    return <div key={i} className=''>
                        <h5>{el?.Model}</h5>
                    </div>
                })}
            </div>
            <div className='col-4 custom-card'></div>
        </div>
        </div>
    )
}

export default CartDetails
