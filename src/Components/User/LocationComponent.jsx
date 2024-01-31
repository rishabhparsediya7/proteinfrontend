import React, { useEffect, useState } from "react";
import axios from "axios";
const LocationComponent = () => {
  const [location, setLocation] = useState({});
  const [address, setAddres] = useState({});

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
    window.scrollTo(0, 0);
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
  return (
    <div className="flex flex-col mb-2 py-4 px-2 gap-2 justify-between">
      <div className="flex align-middle my-auto">
        <p>
          <strong>Delivering to</strong>
        </p>
      </div>
      <div>
        <input
          type="text"
          className="rounded-md w-full"
          onChange={(e) => setAddres(e.target.value)}
          value={address.full_address_line}
        />
      </div>
      <div className="flex md:w-full md:justify-center align-middle">
        <button
          onClick={getLocationChange}
          className="bg-yellow-300 md:w-full h-8 md:h-10 border-2 py-2 px-2 border-white text-white rounded-md"
        >
          Get Current Location
        </button>
      </div>
    </div>
  );
};

export default LocationComponent;
