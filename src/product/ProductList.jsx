import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    function handleClick() {
        console.info('Load Products Button Clicked');
        setLoad(true);
    }

    useEffect(() => {
        console.info('Call Use Effect with empty dependency array[]');
    }, []);

    useEffect(() => {

        async function fetchProducts() {
            const response = await fetch("/products.json");
            const data = await response.json();
            setProducts(data);
        }

        if (load) {
            fetchProducts();
        }

        return () => {
            console.info("Product List Component Unmunted")
        }

    }, [load]);

    return (
        <div>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}