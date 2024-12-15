import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import purpleWatch from "../assets/purple.png";
import cyanWatch from "../assets/cyan.png";
import blackWatch from "../assets/black.png";
import blue from "../assets/skyblue.png";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const bandColors = [
    { color: "Purple", value: "#816BFF", image: purpleWatch },
    { color: "Cyan", value: "#1FCEC9", image: cyanWatch },
    { color: "Black", value: "#3B4747", image: blackWatch },
    { color: "Blue", value: "#4B97D3", image: blue },
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
        <div className=" p-5 rounded-lg text-[#8091A7]">
            <div className="flex flex-col md:flex-row items-center mx-auto w-11/12 pb-2">
                <div className="w-full">
                    <img
                        src={selectedColor.image}
                        alt="Watch Thumbnail"
                        className=""
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

                    <div className="flex items-center mb-2 text-xl text-[#8091A7] py-2">
                        <span className="line-through mr-2">$99.00</span>
                        <span className="text-[#6576ff] font-bold text-2xl">
                            ${getSizePrice(selectedSize).toFixed(2)}
                        </span>
                    </div>

                    <p className="text-[#8091A7] text-lg font-normal mb-4 w-1/2">
                        I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.
                    </p>

                    <table className="table-auto border-collapse w-full text-left my-4">
                        <tbody>
                            <tr>
                                <td className="  py-2">Type</td>
                                <td className="  py-2">Model Number</td>
                            </tr>
                            <tr>
                                <td className="text-base font-bold text-[#364A63]">Watch</td>
                                <td className="text-base font-bold text-[#364A63]">Forerunner 290XT</td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="mb-4">
                        <h4 className="font-bold text-[#364A63] mb-1 text-lg">Band Color</h4>
                        <div className="flex space-x-2">
                            {bandColors.map((band) => (
                                <span
                                    key={band.color}
                                    className={`w-6 h-6 rounded-full cursor-pointer border-2 ${selectedColor.color === band.color ? "border-blue-500 p-1" : "border-gray-600"
                                        }  bg-[${band.value}]`}
                                    style={{
                                        backgroundColor: band.value,
                                    }}
                                    onClick={() => setSelectedColor(band)}
                                ></span>
                            ))}
                        </div>

                    </div>

                    <div className="mb-4">
                        <h4 className="font-medium mb-1">Wrist Size</h4>
                        <div className="flex space-x-2 font-bold">
                            {["S", "M", "L", "XL"].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`border rounded-md px-3 py-1 flex items-center gap-1 ${selectedSize === size
                                        ? "border-[#6576FF] text-[#6576FF]"
                                        : "border-gray-600 text-[#364A63]"
                                        }`}
                                >
                                    <span>{size}</span>
                                    <span className="text-sm ">${getSizePrice(size)}</span>
                                </button>
                            ))}
                        </div>
                    </div>


                    <div className="flex gap-2 items-center"><div className="flex items-center ">
                        <button
                            onClick={() => handleQuantityChange(-1)}
                            className="border p-2 rounded-md   "
                        >
                            <FaMinus />
                        </button>
                        <p className="text-black px-1">{quantity}</p>
                        <button
                            onClick={() => handleQuantityChange(1)}
                            className="border p-2 rounded-md   "
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
                        <CiHeart className="w-6 h-6" />
                    </div>
                </div>
            </div>


            <button
                onClick={() => setShowModal(true)}
                className="mx-auto bottom-5 right-5 bg-blue-500 px-5 py-2 mt-5  text-white rounded-full flex items-center space-x-2 shadow-lg"
            >
                <FaShoppingCart />
                <span>{cart.length}</span>
            </button>


            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white   rounded-lg w-11/12 md:w-2/3 lg:w-1/2 shadow-lg overflow-hidden">
                        <div className="p-5">
                            <h2 className="text-[22px] font-bold text-[#364A63]">Your Cart</h2>
                        </div>

                        <div className="p-5">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b text-[#8091A7] text-sm pb-2">
                                        <th className="  ">Item</th>
                                        <th className="  ">Color</th>
                                        <th className="  ">Size</th>
                                        <th className="  ">Qnt</th>
                                        <th className="   text-right">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="py-2 flex items-center text-[#364A63]">
                                                <img
                                                    src={item.image}
                                                    alt="Cart Item"
                                                    className="w-12 h-12 rounded-md mr-3"
                                                />
                                                <span >Classy Modern Smart Watch</span>
                                            </td>
                                            <td className="py-2 ">{item.color}</td>
                                            <td className="py-2 font-bold ">{item.size}</td>
                                            <td className="py-2 font-bold ">{item.quantity}</td>
                                            <td className="py-2 font-bold  text-right">
                                                ${item.price * item.quantity}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr className="">
                                        <td>Total: </td>
                                        <td></td>
                                        <td></td>
                                        <td className="py-2 font-bold text-base">{totalItems}</td>
                                        <td className="py-2 font-bold  text-right">${totalPrice}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>





                        <div className="p-5 flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-5 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
                            >
                                Continue Shopping
                            </button>
                            <button
                                className="bg-blue-500 px-5 py-2 text-white rounded-md hover:bg-blue-600"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductDetails;
