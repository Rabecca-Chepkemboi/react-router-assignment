import React from "react";
import './style.css';
import { useParams } from "react-router";
const Form = () => {
  return (
    <div className="product-detail">
      <h2>Add New Product</h2>
      <form>
        <div className="form2">
          <label htmlFor="name">Product Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter product name" />
        </div>
        <div className="product-detail2">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" placeholder="Enter product description"></textarea>
        </div>
        <div className="product-detail2">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" placeholder="Enter product price" />
        </div>
        <div className="product-detail2">
          <label htmlFor="discount">Discount:</label>
          <input type="number" id="discount" name="discount" placeholder="Enter discount percentage" />
        </div>
        <button type='submit'>Add Product</button>
      </form>
    </div>
  )
}
export default Form;