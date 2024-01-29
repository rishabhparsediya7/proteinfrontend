import React, { useEffect, useState } from "react";
import download__2 from "../../assets/download__2.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice";
import { useNavigate } from "react-router-dom";
const ProductDetail = ({ product }) => {
  const [location, setLocation] = useState({});
  const [address, setAddres] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getLocationChange = async (lat, lon) => {
    console.log("Changing location!");
    const GEO_BASE_URL = import.meta.env.VITE_GEOCODING_API_URL;
    const api_key = import.meta.env.VITE_GEOCODING_API_KEY;
    const lati = location.latitude ? location.latitude : lat;
    const long = location.longitude ? location.longitude : lon;
    const api_url = `${GEO_BASE_URL}?q=${lati}%2c+${long}&key=${api_key}`;
    const response = await axios.get(api_url);
    if (response.status == 200) {
      setAddres({
        city: response.data.results[0].components.city,
        district: response.data.results[0].components.city_district,
        state: response.data.results[0].components.state,
        country: response.data.results[0].components.country,
        pincode: response.data.results[0].components.postcode,
        full_address_line: response.data.results[0].formatted,
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0,0);
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        getLocationChange(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        setError(`Error getting location: ${error.message}`);
      }
    );
  }, []);
  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  return (
    <div className="w-full">
      <div className="p-4 flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="px-4 relative py-8 bg-slate-200 md:bg-transparent rounded-t-3xl rounded-b-xl">
            <img
              src={download__2}
              className="w-full md:w-fit m-auto h-80 z-20"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="heading py-2">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <h1 className="text-4xl font-bold text-green-500">
              Rs. {product.price_INR}
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              corrupti repudiandae a. Aliquid quibusdam, eligendi libero
              necessitatibus dolorum modi ex?
            </p>
          </div>
          <div className="fixed md:static bottom-0 p-2 bg-white px-2 right-0 w-full flex gap-2">
            <button
              onClick={() => handleBuyNow(product)}
              className="btn py-2 text-lg w-full rounded-md bg-yellow-400 text-white"
            >
              Buy Now
            </button>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="btn py-2 text-lg w-full rounded-md bg-yellow-400 text-white"
            >
              Add cart
            </button>
          </div>
          <div className="flex mb-2 py-4 px-2 justify-between">
            <div className="flex align-middle my-auto">
              <p>Delivering to : {address.full_address_line}</p>
            </div>
            <div className="flex align-middle">
              <button
                onClick={getLocationChange}
                className="bg-transparent h-8 border-2 py-1 px-2 border-yellow-400 rounded-md"
              >
                Change
              </button>
            </div>
          </div>
          <div className="flex p-0 w-full justify-between">
            <div className="flex gap-2 w-full">
              {new Array(3).fill("").map((e, index) => (
                <div
                  key={index}
                  className="flex-1 flex h-16 rounded-md bg-lime-200 justify-center align-middle"
                >
                  <h1 className="my-auto">7 days return</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-8 pt-2 w-full justify-between">
        <h1 className="text-lg p-2 md:text-3xl">Reviews:</h1>
        <div className="flex flex-col w-full gap-1">
          {new Array(5).fill("").map((e, index) => (
            <div
              key={index}
              className="flex flex-col p-3 shadow-lg rounded-md bg-neutral-50 justify-center align-middle"
            >
              <h1 className="text-left text-lg font-bold my-auto">John Doe</h1>
              <p className="text-left my-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                qui quam laboriosam sunt officia et blanditiis alias molestiae,
                itaque quisquam.
              </p>
              <p>
                <i className="bi bi-star-fill text-yellow-300"></i>
                <i className="bi bi-star-fill text-yellow-300"></i>
                <i className="bi bi-star-fill text-yellow-300"></i>
                <i className="bi bi-star-fill text-yellow-300"></i>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
