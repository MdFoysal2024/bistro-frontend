import React from 'react'
import useCart from '../../../hooks/useCart';

const MyCart = () => {

    const [cart] = useCart();
    return (
        <div>
            My Cart{cart.length}
        </div>
    )
}

export default MyCart
