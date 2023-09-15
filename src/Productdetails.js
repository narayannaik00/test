import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
    const { id } = useParams();

    const [ProductDetails, setProductDetail] = useState([]);
    const [errors, setError] = useState("");

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
                setProductDetail(response.data);
            })

            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    }, [id]);

    if (!ProductDetails) {
        return <div>Loading...</div>;
    }

    if (errors) {
        return <div>Errord: {errors}</div>;
    }

    return (
        <div>
            <h2> Selected Product Id: {ProductDetails.id}  </h2>

            <h2> Selected Product titile: {ProductDetails.title}  </h2>
            <h2> Selected User Description:{ProductDetails.description}  </h2>
            <h2> Selected User Price:{ProductDetails.price}  </h2>
            <h2> Selected User Discount Percentage:{ProductDetails.discountPercentage}  </h2>
            <h2> Selected User Rating:{ProductDetails.rating}  </h2>

        </div>
    );
}

export default ProductDetails;