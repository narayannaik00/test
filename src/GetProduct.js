import React, { useState, useEffect } from 'react'
import Axios from "axios"
import Numbers from './Number';
import { Link } from 'react-router-dom';

const GetProduct = () => {
    const [productData, setProductData] = useState([
      {
        id:0,
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0.0,
        rating: 0.0,
      }]);


      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(5);

    useEffect(() => {
      Axios.get("https://dummyjson.com/products").then((response) => {
        console.clear();
        console.log(response);
        console.log("narayan");
        console.log(response.data.products);
        setProductData(response.data.products);
      });
    }, []);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
    const currentPosts = productData.slice(indexOfFirstPost, indexOfLastPost);
  
    return (
      <div>
        <h1>Products List:</h1>
        <table>
          <thead>
            <tr>
          
              <th> Title </th>
              <th> Description </th>
              <th> Price </th>
              <th> Discount Percentage </th>
              <th> Rating </th>
            </tr>
          </thead>
        
  
        {currentPosts.map((data) => {
          return (
            
              <tbody>
                <tr>
                
                <td><Link to={`/Products/${data.id}`}> {data.title} </Link></td>
                  <td>{data.description}</td>
                  <td>{data.price}</td>
                  <td>{data.discountPercentage}</td>
                  <td>{data.rating}</td>
                </tr>
              </tbody>
            
          );
        })}
      </table>
      <Numbers
            totalPosts={productData.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage} 
          />
      </div>
    );
  };
  
  
export default GetProduct;


// title: "",
//             descrtiption: "",
//             prize:0,
//             discountPercentage: "",
//             rating:0.0