import { useState } from "react";

const ProductDetails = () => {
    const [product, setProduct] = useState({}); 


    return (
        <div className="card lg:card-side w-11/12 mx-auto">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;