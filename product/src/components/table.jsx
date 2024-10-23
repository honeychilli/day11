import React from "react";
 const products = [
     {
         id: 1,
         name: "Apple",
         category: "Fruits",
         price: 100,
        quantity: 2
     },
     {
         id: 2,
         name: "Orange",   
         category: "Fruits",    
         price: 200,
         quantity: 3
     }
 ]
const productsList = products.map((product) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><button onClick={() => handleclick(product.id)} className="btn btn-primary btn-curve btn-hover-primary text-danger ">clcicked</button></td>
        </tr>
    )
})

function handleclick(params) {
  return (
    alert(params)
  )
}

export default function TableComponent() {
  return products&& products.length >0 ? (
    <div>
        <h1>Table Component</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>   
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {productsList}
        </tbody>
      </table>
    </div>
  ):(
    <div>
        <h1>No Products</h1>
    </div>
  );
}
