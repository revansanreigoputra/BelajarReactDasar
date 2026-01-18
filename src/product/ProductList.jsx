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
        if (load) {
            fetch("/products.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .then(() => loaded.current = true);
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