import React,{useState, useEffect} from 'react'

export default function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock data until backend is set up
    const mockData = [
        { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
        { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
    ];
    setProducts(mockData);
  }, []);
  return (
    <div>
      <h2>Product List</h2>
        {
          products.map(product=>(
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
            </div>
          ))
        }
    </div>
  )
}
