import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';

export default function ProductList() {
    const items = useSelector((state) => state.products.items);

    return (
        <div className='items'>
            {
                items.map((item) => (
                    <div className="item-wrapper" key={item.id} >
                        <ProductCard item={item} id={item.id} />
                    </div>
                ))
            }
        </div>
    )
}
