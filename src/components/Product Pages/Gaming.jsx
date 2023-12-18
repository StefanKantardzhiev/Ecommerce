import React, { useEffect, useState } from 'react';
import { api } from '../../services/rest-service';
import ProductsList from '../../components/UI/ProductsList';

const Gaming = () => {
    const [gaming, setGaming] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            let response = await api.get('/products/catalog');
            let products = response;
            let gamingList = products.filter(item => item.category === "gaming");
            setGaming(gamingList);
        };

        fetchProducts();
    }, []);

    return (
        <ProductsList data={gaming} />
    );
};

export default Gaming;