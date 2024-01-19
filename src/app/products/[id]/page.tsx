"use client"
import React, { FC, useEffect, useState } from 'react';
import data from "@/product.json";
import "./info.css";

interface PageProps {
  params: { id: string };
}

const Product: FC<PageProps> = ({ params }: any) => {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const inventory = data;
      const selectedProduct = inventory.find((item) => item.id.toString() === params.id);

      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    };

    fetchData();
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='card-container'>
      <div className='card'>
        <div className='img'>
          <img src={product.image} alt={product.name} className='img-hover' />
        </div>
        <div className='info'>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className='qty'>
            +{1}-
          </div>
          <div className='foot'>
            <h2>{product.price}</h2>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;