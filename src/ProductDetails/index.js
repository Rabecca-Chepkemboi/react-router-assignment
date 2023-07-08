import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDisplay= () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    const getProductDisplay = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductDisplay();
  }, [productId]);
  if (!product) {
    return <p>Loading products...</p>;
  }
  return (
    <div className='displayed-items'>
      <h1 className='item'>Product Display</h1>
      <div >
        <img src={product.thumbnail} alt={product.title} />
        <h2>name:{product.title}</h2>
        <br/>
        <p>Description:{product.description}</p>
        <br/>
        <p>Brand:{product.brand}</p>
        <br/>
        <p>Price:{product.price}</p>
        <br/>
        <h4>Ratings:{product.rating}</h4>
        <br/>
        <h4>Stock:{product.stock}</h4>
      </div>
    </div>
  );
};
export default ProductDisplay;