"use client"
import React from 'react';
import products from '@/product';
import Image from 'next/image';
import "./ProductCatalog.css"
function ProductCatalog() {
  return (
      <section id='Products'>
      <h2>Products</h2>
      <div className="container products_container">
      {
        products.map((product)=>{
          return (
            <article key={product.id} className='products_item'>
            <div className='products_img'>
              <img src={product.image} alt="products_img" />
            </div>

            <h3>{product.name}&nbsp; {product.price}</h3>
            
            <div className='products_item-cta'>
              <button  className='btn' >Add to Cart</button>
              <button  className='btn btn-primary'>Vist</button>
            </div>
          </article>
          )
        })
      }

      </div>
    </section>
    
  );
}

export default ProductCatalog;
