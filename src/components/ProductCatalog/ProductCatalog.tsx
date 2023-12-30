"use client"

import React, { useEffect, useState } from 'react';
import products from '@/product.json';
import Image from 'next/image';
import './ProductCatalog.css';
import { IoCart } from 'react-icons/io5';
import Link from 'next/link';

export interface ProductCatalog {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

function ProductCatalog() {
  const [categoryData, setCategoryData] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductCatalog[]>(products);

  const filterData = (data: ProductCatalog[], field: string) => {
    let filteredData = data.map((currentElem: any) => {
      return currentElem[field];
    });
    return [...new Set(filteredData)];
  };

  const categoryType = filterData(products, 'category');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    setCategoryData(selectedCategory !== 'all' ? [selectedCategory] : []);
  };

  useEffect(() => {
    const groupedData = products.reduce((acc: any, item: any) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});

    if (categoryData.length === 0) {
      setFilteredProducts(products);
    } else {
      const filteredData = categoryData.flatMap((category: any) => {
        return groupedData[category] || [];
      });
      setFilteredProducts(filteredData);
    }
  }, [categoryData]);

  return (
    <section id='Products'>
      <h2>Products</h2>
      <div className='category-select'>
        <select id='categorySelect' onChange={handleCategoryChange}>
          <option value='all'>Sort by Category</option>
          {categoryType.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className='container products_container'>
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
          <div className='product-card' >
            <div className='product-tumb'>
              <img src={product.image} alt={product.name}    />
            </div>
            <div className='product-details'>
              <span className='product-catagory'>{product.category}</span>
              <h4>
                {product.name}
              </h4>
              
              <div className='product-bottom-details'>
                <div className='product-price'>₹{product.price}</div>
                <div className='product-links'>
                
                <IoCart />
              
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductCatalog;


