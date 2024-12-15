import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import purpleWatch from "../assets/purple.png";
import cyanWatch from "../assets/cyan.png";
import blackWatch from "../assets/black.png";
import blue from "../assets/skyblue.png";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

const bandColors = [
    { color: "Purple", value: "#8a2be2", image: purpleWatch },
    { color: "Cyan", value: "#00bcd4", image: cyanWatch },
    { color: "Black", value: "#000", image: blackWatch },
    { color: "Blue", value: "", image: blue },
];

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(bandColors[0]);
    const [selectedSize, setSelectedSize] = useState("M");
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleAddToCart = () => {
        const newItem = {
            id: Date.now(),
            image: selectedColor.image,
            color: selectedColor.color,
            size: selectedSize,
            quantity,
            price: getSizePrice(selectedSize),
        };
        setCart([...cart, newItem]);
        setQuantity(1);
    };

    const handleQuantityChange = (value) => {
        if (quantity + value > 0) setQuantity(quantity + value);
    };

    const getSizePrice = (size) => {
        switch (size) {
            case "S":
                return 69;
            case "M":
                return 79;
            case "L":
                return 89;
            case "XL":
                return 99;
            default:
                return 0;
        }
    };

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );

    return (
        <div className="relative p-5 rounded-lg">
            <div className="flex flex-col md:flex-row items-center mx-auto w-11/12">
                <div className="">
                    <img
                        src={selectedColor.image}
                        alt="Watch Thumbnail"
                        className="w-3/4"
                    />
                </div>

                <div className="ml-5">
                    <h2 className="mb-2 text-[40px] font-bold">
                        Classy Modern Smart Watch
                    </h2>

                    <div className="flex items-center text-sm font-normal ">
                    <ReactStars
                        count={5}
                        value={3.5}
                        size={24}
                        isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <span className="text-[#8091A7]">(2 Reviews)</span>
                    </div>

                    <div className="flex items-center mb-2 text-lg">
                        <span className="line-through text-gray-500 mr-2">$99.00</span>
                        <span className="text-blue-500 font-bold">
                            ${getSizePrice(selectedSize)}.00
                        </span>
                    </div>

                    <p className="text-gray-400 mb-4">
                        I must explain to you how this mistaken idea of denouncing pleasure
                        was born. I will give you a complete account.
                    </p>

                    <div className="mb-4">
                        <h4 className="text-gray-300 font-medium mb-1">Band Color</h4>
                        <div className="flex space-x-2">
                            {bandColors.map((band) => (
                                <span
                                    key={band.color}
                                    className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                                        selectedColor.color === band.color
                                            ? "border-blue-500"
                                            : "border-gray-600"
                                    }`}
                                    style={{ backgroundColor: band.value }}
                                    onClick={() => setSelectedColor(band)}
                                ></span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-gray-300 font-medium mb-1">Wrist Size</h4>
                        <div className="flex space-x-2">
                            {["S", "M", "L", "XL"].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`border rounded-md px-3 py-1 ${
                                        selectedSize === size
                                            ? "bg-blue-500 text-white"
                                            : "border-gray-600 text-gray-400"
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-5">
                        <button
                            onClick={() => handleQuantityChange(-1)}
                            className="border p-2 rounded-md bg-gray-700 hover:bg-gray-600"
                        >
                            <FaMinus />
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(1)}
                            className="border p-2 rounded-md bg-gray-700 hover:bg-gray-600"
                        >
                            <FaPlus />
                        </button>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="bg-blue-500 px-5 py-2 text-white rounded-md hover:bg-blue-600"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
